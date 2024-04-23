import { Link } from 'react-router-dom';
import './rollingList.scss';
import { useState, useEffect } from 'react';
import { BASE_URL_RECIPIENT } from '../../constants/url';
import PopularPapers from '../../components/rollingList/PopularPapers';
import RecentPapers from '../../components/rollingList/RecentPapers';

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
    getRecipientData(20, 0);
  }, []);

  return (
    <section className="layout__list">
      <div className="inner__size-full inner__body">
        <div className="RollingList">
          <PopularPapers recipients={recipients} />
          <RecentPapers recipients={recipients} />
          <div className="button-box">
            <Link to={'/post'}>
              <button className="button--fill-primary button__size-h56 main__button-box">
                나도 만들어보기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
