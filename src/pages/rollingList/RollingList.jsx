import { Link } from 'react-router-dom';
import './rollingList.scss';
import PopularPapers from '../../components/rollingList/PopularPapers';
import RecentPapers from '../../components/rollingList/RecentPapers';

export default function RollingList() {
  return (
    <section className="layout__list">
      <div className="inner__size-full inner__body">
        <div className="RollingList">
          <PopularPapers />
          <RecentPapers />
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
