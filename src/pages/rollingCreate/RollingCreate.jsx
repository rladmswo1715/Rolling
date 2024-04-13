import PostToInput from "../../components/rollingCreate/postToInput/PostToInput";
import BackgroundOption from "../../components/rollingCreate/backgroundOption/BackgroundOption";
import "./rollingCreate.scss";

export default function RollingCreate() {
  return (
    <section className="layout__create">
      <div className="inner__size-ms inner__body">
        <PostToInput />
        <BackgroundOption />

        <div className="btn--container">
          <button class="button--fill-primary button__size-h56 font-bold">
            생성하기
          </button>
        </div>
      </div>
    </section>
  );
}
