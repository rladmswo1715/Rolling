import { Link, useLocation } from 'react-router-dom';
import './header.scss';
import logoImage from '/assets/logo/logo_rolling.svg';

export default function Header() {
  const location = useLocation();

  const showButtonBox =
    location.pathname === '/' || location.pathname === '/list';

  return (
    <header className="header__wrap">
      <div className="inner__size-ls d__flex--btw header__inner">
        <Link to={'/'}>
          <img src={logoImage} alt="롤링" className="header__image__logo" />
        </Link>
        {showButtonBox && (
          <Link to={'/post'}>
            <div className="header__button-box">
              <button className="button__size-h40 button--outlined">
                롤링 페이퍼 만들기
              </button>
            </div>
          </Link>
        )}
      </div>
    </header>
  );
}
