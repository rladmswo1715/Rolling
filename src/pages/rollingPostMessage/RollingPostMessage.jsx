import './rollingPostMessage.scss';
import NameInput from '../../components/rollingPostMessage/NameInput';
import ProfileBox from "../../components/rollingPostMessage/ProfileBox";

export default function RollingPostMessage() {
  
  return (

    <section className="layout__message">
      <div className="inner__size-ms inner__body">
        <form className="send-form">
          <div className="send-form__content">
            <span>From.</span>
            <NameInput />
          </div>

          <div className="send-form__content">
            <span>프로필 이미지</span>
            <ProfileBox />
          </div>

          <div className="send-form__content">
            <span>상대와의 관계</span>
            <div className="dropdown">
              <button className="dropdown__toggle hide">선택</button>
            </div>
          </div>

          <div className="send-form__content">
            <span>내용을 입력해 주세요</span>
            <div>에디터</div>
          </div>

          <div className="send-form__content">
            <span>폰트 선택</span>
            <div className="dropdown">
              <button className="dropdown__toggle hide">선택</button>
            </div>
          </div>

          <button className="button--fill-primary button__size-h56 font-bold send-form__btn">생성하기</button>
        </form>
      </div>
    </section>
  );
}