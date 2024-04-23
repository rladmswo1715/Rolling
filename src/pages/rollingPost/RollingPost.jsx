import './rollingPost.scss';
import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetData } from '../../hooks/useGetData';
import { BASE_URL_RECIPIENT } from '../../constants/url';
import RollingPostView from './RollingPostView';
import SubHeader from '../../components/layout/subHeader/SubHeader';

export default function RollingPost() {
  const [offset, setOffset] = useState(0); // 0번부터
  const [limit, setLimit] = useState(4); // 4개씩 GET
  const { id } = useParams(); // 페이지(수신자) id
  const navigate = useNavigate();

  // 페이지 데이터 GET
  const { data: recipient, isLoading } = useGetData(
    `${BASE_URL_RECIPIENT}${id}/`
  );

  // 메세지 데이터 GET
  const { data: messages } = useGetData(
    `${BASE_URL_RECIPIENT}${id}/messages/?limit=${limit}&offset=${offset}`
  );

  // 수신자 페이지배경 상태
  const [background, setBackground] = useState(null);

  // 스크롤 상태
  const [isEndPage, setIsEndPage] = useState(false);

  // 메세지 상태
  const [hasMessage, setHasMessage] = useState(false);
  const [messageContents, setMessageContents] = useState([]);
  const [nextMessagesURL, setNextMessagesURL] = useState('');

  // 토스트 상태
  const [isToastShow, setIsToastShow] = useState(false);
  const [toastContent, setToastContent] = useState('');

  // 모달 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContents, setModalContents] = useState(null);

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
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
      setIsEndPage(true);
    }
  };

  // 토스트 열림 여부
  // TODO : 토스트 콘텐츠 설정해야 함
  function handleToastClose() {
    setIsToastShow(false);
  }

  /* 무한스크롤
    isEndPage와 nextMessageURL이 바뀔때마다 아래 내용을 실행한다.
    isEndPage true이고, nextMessageURL이 true면, 계속 nextMessageURL로 fetch를 해온다.
    nextURL을 다시 setNextMessageURL 하고,
    messageContent를 다시 set한다.
   */
  
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

  const handleCardClick = (cardNumber) => {
    setModalContents(messageContents[cardNumber]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEmptyCardClick = () => {
    navigate(`/post/${id}/message`);
  };

  const props = {
    id,
    background,
    hasMessage,
    messageContents,
    nextMessagesURL,
    handleCardClick,
    isToastShow,
    toastContent,
    handleToastClose,
    isModalOpen,
    modalContents,
    handleCloseModal,
    cardScrollRef,
    navigate,
    handleEmptyCardClick,
  };

  return (
    <>
      <SubHeader />
      <RollingPostView {...props} />
    </>
  );
}
