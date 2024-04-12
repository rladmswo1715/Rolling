import './rollingPostMessage.scss';

export default function RollingPostMessage() {
  
  return (

    <section className="layout__message">
      <div className="inner__size-ms inner__body">
        <form className="send-form">
          <div className="send-form__content">
            <span>From.</span>
            <input type="text" placeholder="이름을 입력해 주세요." className="send-form__input" />
          </div>

          <div className="send-form__content">
            <span>프로필 이미지</span>
            <div className="send-form__profile-wrap">
              <div className="profile-picture--xlarge">
                이미지
              </div>
              <div className="send-form__profile-wrap-inner">
                <span>프로필 이미지를 선택해주세요!</span>
                <div className="send-form__profile-list">
                  <div className="profile-picture--large"></div>
                  <div className="profile-picture--large"></div>
                  <div className="profile-picture--large"></div>
                  <div className="profile-picture--large"></div>
                  <div className="profile-picture--large"></div>
                  <div className="profile-picture--large"></div>
                  <div className="profile-picture--large"></div>
                  <div className="profile-picture--large"></div>
                  <div className="profile-picture--large"></div>
                  <div className="profile-picture--large"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="send-form__content">
            <span>상대와의 관계</span>
            <select>
              <option>지인</option>
            </select>
          </div>

          <div className="send-form__content">
            <span>내용을 입력해 주세요</span>
            <div>에디터</div>
          </div>

          <div className="send-form__content">
            <span>폰트 선택</span>
            <select>
              <option>Noto Sans</option>
            </select>
          </div>

          <button className="button--fill-primary button__size-h56 font-bold">123</button>
        </form>
      </div>
    </section>
  );
}