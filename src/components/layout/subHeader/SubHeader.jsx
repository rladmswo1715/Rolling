import "./subHeader.scss";
import ProfileList from "./ProfileList";
import EmojiBox from "./EmojiBox";
import { Link, useParams } from "react-router-dom";
import { useGetData } from "../../../hooks/useGetData";
import { BASE_URL_RECIPIENT } from "../../../constants/url";
import ShareBox from "./ShareBox";

export default function SubHeader() {
  const { id } = useParams();
  const { data: getAllapi, isLoading: allLoading } = useGetData(
    `${BASE_URL_RECIPIENT}/${id}/`
  );
  const { data: getEmojiApi, isLoading: emojiLoading } = useGetData(
    `${BASE_URL_RECIPIENT}${id}/reactions/`
  );

  const Loading = allLoading && emojiLoading;
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
        {!Loading && (
          <div className="d__flex--center subHeader__right">
            {getAllapi && <ProfileList onComent={getAllapi.recentMessages} />}
            <EmojiBox onEmoji={getEmojiApi} onID={id} />
            <ShareBox />
          </div>
        )}
      </div>
    </section>
  );
}
