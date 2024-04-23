import './rollingPostEdit.scss';
import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BASE_URL_RECIPIENT, BASE_URL_MESSAGE } from '../../constants/url';
import { useGetData } from '../../hooks/useGetData';
import RollingPostEditView from './RollingPostEditView';
const DISTANCE_WINDOW_BOTTOM = 1400;
import { deleteData } from '../../api/rollingPostEdit';

export default function RollingPostEdit() {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(4);
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: recipient } = useGetData(`${BASE_URL_RECIPIENT}${id}/`);

  const { data: messages } = useGetData(
    `${BASE_URL_RECIPIENT}${id}/messages/?limit=${limit}$offset=${offset}`
  );

  // 수신자 상태
  const [background, setBackground] = useState(null);
  const [recipientName, setRecipientName] = useState('');

  // 스크롤 상태
  const [isEndPage, setIsEndPage] = useState(false);

  // 메세지 상태
  const [hasMessage, setHasMessage] = useState(false);
  const [messageContents, setMessageContents] = useState([]);
  const [nextMessagesURL, setNextMessagesURL] = useState('');
  const cardScrollRef = useRef();

  // 처음 렌더링됐을 때, 스크롤 이벤트리스너를 window 객체에 등록
  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener('scroll', handleScroll);
    }, 100);

    // 클린업
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 스크롤 핸들러
  const handleScroll = () => {
    cardScrollRef.current.getBoundingClientRect().bottom <
    DISTANCE_WINDOW_BOTTOM // 1000
      ? setIsEndPage(true)
      : '';
  };

  // 무한스크롤
  useEffect(() => {
    if (isEndPage && nextMessagesURL) {
      const fetchData = async () => {
        try {
          const response = await fetch(nextMessagesURL);
          if (response.ok) {
            const data = await response.json();
            setNextMessagesURL(data.next);
            setMessageContents([...messageContents, ...data.results]);
          }
        } catch (error) {
          console.error(error);
        }
        return { data };
      };

      const { data } = fetchData();
    }
  }, [isEndPage, nextMessagesURL]);

  // 페이지 자체가 바뀌었을 때만, 백그라운드 설정
  useEffect(() => {
    if (recipient) {
      recipient.backgroundImageURL
        ? setBackground(recipient.backgroundImageURL)
        : setBackground(recipient.backgroundColor);
      setRecipientName(recipient.name);
    }
  }, [recipient]);

  // 메세지가 바뀌었을 때만, 메세지여부, 메세지콘텐츠, 다음메세지요청URL 설정
  useEffect(() => {
    if (messages) {
      setHasMessage(true);
      setMessageContents(messages.results);
      setNextMessagesURL(messages.next);
    }
  }, [messages]);

  // 보라색 삭제버튼 클릭 핸들러
  // 페이지 자체를 삭제
  const handleDeleteButtonClick = async () => {
    deleteData(`${BASE_URL_RECIPIENT}${id}/`);
    alert('페이지 삭제 완료!');
    navigate('/');
  };

  // 각 카드UI의 쓰레기통버튼을 클릭했을 때 해당 메세지를 삭제하는 이벤트 핸들러
  const handleDeleteMessageClick = (messageId) => {
    deleteData(`${BASE_URL_MESSAGE}${messageId}/`);
    alert('메세지 삭제 완료!');
    window.location.reload();
  };

  const props = {
    background,
    hasMessage,
    messageContents,
    nextMessagesURL,
    handleDeleteButtonClick,
    cardScrollRef,

    handleDeleteMessageClick,
  };

  return <RollingPostEditView {...props} />;
}
