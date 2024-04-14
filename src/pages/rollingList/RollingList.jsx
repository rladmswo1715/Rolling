import { Link } from 'react-router-dom';
import './rollingList.scss';
import RollingPaper from '../../components/rollingList/RollingPaper';
import { useState, useEffect } from 'react';
import { BASE_URL_RECIPIENT } from '../../constants/url';
// import BASE_URL_MESSAGE from '../../constants/url';

export default function RollingList() {
  const [recipient, setRecipient] = useState([]);
  const [recentMessage, setRecentMessage] = useState([]);
  const [topReaction, setTopReaction] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getRecipientData(limit = 8, offset = 0) {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${BASE_URL_RECIPIENT}?limit=${limit}&offset=${offset}`
      );
      if (response.ok) {
        const res = await response.json();
        setRecipient(res.results);
        setRecentMessage(res.results.recentMessage);
        setTopReaction(res.results.topReaction);
        setIsLoading(false);
      } else {
        throw new Error('데이터를 받아오는데 실패했습니다!');
      }
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getRecipientData(8, 0);
  }, []);

  // 아래 주석을 해제해서 데이터를 미리 출력해볼 수 있어요!
  console.log(recipient);

  return (
    <section className="layout__list">
      <div className="inner__size-full inner__body">
        {/* 여기서 작업해주세요 */}
        롤링페이퍼 리스트 페이지
        <div>박스</div>
      </div>
    </section>
  );
}
