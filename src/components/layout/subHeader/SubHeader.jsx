import "./subHeader.scss";
import ProfileList from "./ProfileList";
import EmojiBox from "./EmojiBox";
import { Link, useParams } from "react-router-dom";
import { useGetData } from "../../../hooks/useGetData";
import { BASE_URL_RECIPIENT } from "../../../constants/url";

export default function SubHeader() {
  const { id } = useParams();
  const { data: getAllapi } = useGetData(`${BASE_URL_RECIPIENT}/${id}/`);
  const { data: getEmojiApi } = useGetData(
    `${BASE_URL_RECIPIENT}${id}/reactions/`
  );
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
          {getAllapi && (
            <ProfileList onComent={getAllapi.recentMessages} onID={id} />
          )}
          {getEmojiApi && <EmojiBox onEmoji={getEmojiApi} onID={id} />}
          <button className="button--outlined button__size-h36 before-icon btn-share">
            <span className="unvisible">공유하기</span>
          </button>
        </div>
      </div>
    </section>
  );
}
