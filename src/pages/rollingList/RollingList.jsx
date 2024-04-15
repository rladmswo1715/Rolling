import { Link } from 'react-router-dom';
import './rollingList.scss';
import RollingPaperPurple from '../../components/rollingList/RollingPaperPurple';
import RollingPaperOrange from '../../components/rollingList/RollingPaperOrange';
import RollingPaperBlue from '../../components/rollingList/RollingPaperBlue';
import RollingPaperGreen from '../../components/rollingList/RollingPaperGreen';

export default function RollingList() {
  return (
    <section className="layout__list">
      <div className="inner__size-full inner__body">
        <div className="RollingList">
          <div className="RollingList__wrap">
            <h1>인기 롤링 페이퍼 🔥</h1>
            <div className="RollingList__wrap--papers">
              <RollingPaperPurple />
              <RollingPaperOrange />
              <RollingPaperBlue />
              <RollingPaperGreen />
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
      </div>
    </section>
  );
}
