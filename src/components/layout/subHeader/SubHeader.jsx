import './subHeader.scss';
import ProfileList from './ProfileList';
import EmojiBox from './EmojiBox';
import { Link } from 'react-router-dom';

const testArr = Array.from({ length: 97 }, (_, i) => i);
const emojiArr = Array.from({ length: 8 }, (_, i) => i);

export default function SubHeader() {
  return (
    <section className="subHeader__wrap">
      <div className="inner__size-ls d__flex--btw header__inner subHeader__inner">
        <div className="d__flex--center subHeader__left">
          <Link to="/list" className="before-icon btn-back">
            <span className="unvisible">뒤로가기</span>
          </Link>
          <h1 className="subHeader__title">
            To. Ashley Kim Ashley Kim Ashley Kim
          </h1>
        </div>
        <div className="d__flex--center subHeader__right">
          <ProfileList arrayProps={testArr} />
          <EmojiBox arrayProps={emojiArr} />
          <button className="button--outlined button__size-h36 before-icon btn-share">
            <span className="unvisible">공유하기</span>
          </button>
        </div>
      </div>
    </section>
  );
}
