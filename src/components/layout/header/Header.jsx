import "./header.scss";
import logoImage from "../../../assets/logo/logo_rolling.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header__wrap">
      <div className="inner__size-ls d__flex--btw header__inner">
        {/* 여기서 부터 작업해 주세요. */}
        <Link to={"/"}>
          <img src={logoImage} alt="롤링" className="header__image__logo" />
        </Link>
        <Link to={"/post"}>
          <button className="button">롤링 페이퍼 만들기</button>
        </Link>
      </div>
    </header>
  );
}
