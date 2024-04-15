import purpleIcon from '/assets/icon/pattern_purple.svg';
import './rollingPaper.scss';
import profileImage from '/assets/icon/icon_temp.svg';
import emoji from '/assets/image/emoji_temp.png';

export default function RollingPaperPurple() {
  return (
    <div className="RollingPaper--purple">
      <div className="RollingPaper__profile">
        <h1>To.Sowon</h1>
        <img src={profileImage} alt="profileImage" />
        <p>
          <b>30</b>명이 작성했어요!
        </p>
      </div>
      <img src={emoji} alt="emoji" />
      <img src={purpleIcon} alt="purpleIcon" className="RollingPaper--icon" />
    </div>
  );
}
