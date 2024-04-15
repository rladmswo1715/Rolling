import { Link } from 'react-router-dom';
import './rollingList.scss';
import RollingPaperPurple from '../../components/rollingList/RollingPaperPurple';
// import RollingPaperPurple from '../../components/rollingList/RollingPaperPurple';
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
        <div className="RollingList">
          <div className="RollingList__wrap">
            <h1>인기 롤링 페이퍼 🔥</h1>
            <div className="RollingList__wrap--papers">
              <RollingPaperPurple />
              {/* <RollingPaperOrange />
              <RollingPaperBlue />
              <RollingPaperGreen /> */}
            </div>
          </div>
          <div className="RollingList__wrap">
            <h1>최근에 만든 롤링 페이퍼 ⭐️</h1>
            <div className="RollingList__wrap--papers">
              {/* <RollingPaperPurple />
              <RollingPaperOrange />
              <RollingPaperBlue />
              <RollingPaperGreen /> */}
            </div>
          </div>
          <div className="button-box">
            <Link to={'/post'}>
              <button className="button--fill-primary button__size-h56 main__button-box">
                나도 만들어보기
              </button>
            </Link>
          </div>
        </div>
        {/* 롤링페이퍼 리스트 페이지
        <div>아래는 fetch된 데이터를 사용하는 예시에요</div>
        {!isLoading && recipients.map((el) => <p key={el.id}>id는 {el.id}</p>)} */}
      </div>
    </section>
  );
}
