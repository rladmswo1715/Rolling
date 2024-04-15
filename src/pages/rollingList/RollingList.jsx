import { Link } from 'react-router-dom';
import './rollingList.scss';
import RollingPaper from '../../components/rollingList/RollingPaper';
import { useState, useEffect } from 'react';
import { BASE_URL_RECIPIENT } from '../../constants/url';

export default function RollingList() {
  const [recipients, setRecipients] = useState([]);
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
        setRecipients(res.results);
        setIsLoading(false);
      } else {
        throw new Error('데이터를 받아오는데 실패했습니다!');
      }
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getRecipientData(10, 0);
  }, []);

  console.log(recipients);

  return (
    <section className="layout__list">
      <div className="inner__size-full inner__body">
        {/* 여기서 작업해주세요 */}
        롤링페이퍼 리스트 페이지
        <div>아래는 fetch된 데이터를 사용하는 예시에요</div>
        {!isLoading && recipients.map((el) => <p key={el.id}>id는 {el.id}</p>)}
      </div>
    </section>
  );
}
