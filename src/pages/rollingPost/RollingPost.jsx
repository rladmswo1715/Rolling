import './rollingPost.scss';
import { useState, useEffect } from 'react';
import Card from '../../components/rollingPost/card/Card';
import Emoji from '../../components/rollingPost/emoji/Emoji';
import { BASE_URL_RECIPIENT, BASE_URL_MESSAGE } from '../../constants/url';
import useRecipient from '../../utills/hooks/useRecipient';

export default function RollingPost() {
  // const [recipients, setRecipients] = useState([]);
  const [recentMessages, setRecentMessages] = useState([]);
  const [topReactions, setTopReactions] = useState([]);

  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  const { recipients, isLoading, error, getRecipientData } = useRecipient();
  // async function getRecipientData(limit = 8, offset = 0) {
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch(
  //       `${BASE_URL_RECIPIENT}?limit=${limit}&offset=${offset}`
  //     );
  //     if (response.ok) {
  //       const res = await response.json();
  //       // setRecipients(res.results); // 성공적

  //       res.results.map((el) => {
  //         setRecentMessages(el.recentMessages);
  //         setTopReactions(el.topReaction);
  //       });

  //       setTopReactions(res.results.topReaction);
  //       setIsLoading(false);
  //     } else {
  //       throw new Error('데이터를 받아오는데 실패했습니다!');
  //     }
  //   } catch (error) {
  //     setError(error);
  //   }
  // }

  useEffect(() => {
    getRecipientData(8, 0);
  }, []);

  useEffect(() => {
    console.log(recentMessages);
  }, [recentMessages]);
  // 아래 주석을 해제해서 데이터를 미리 출력해볼 수 있어요!
  console.log(recipients);
  return (
    <section className="layout__post">
      <div className="inner__size-ls inner__body">
        {/* 여기서 작업해주세요 */}

        <Card />
        <Emoji />
        {!isLoading &&
          recipients.map((el) => (
            <p key={el.id}>수신자의 백그라운드컬러 {el.backgroundColor}</p>
          ))}
      </div>
    </section>
  );
}
