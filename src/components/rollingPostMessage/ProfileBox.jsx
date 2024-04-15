import './profileBox.scss';

export default function ProfileBox() {
  return (
    <div className="send-form__profile-wrap">
      <div className="profile-picture--xlarge">
        <img src="https://audition.hanbiton.com/images/common/img_default.jpg" alt="empty" />
      </div>
      <div className="send-form__profile-wrap-inner">
        <span>프로필 이미지를 선택해주세요!</span>
        <div className="send-form__profile-list">
          <div className="profile-picture--large">
            <img src="https://audition.hanbiton.com/images/common/img_default.jpg" alt="empty" />
          </div>
        </div>
      </div>
    </div>
  )
}