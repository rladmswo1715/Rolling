import './rollingPaper.scss';
import profileImage from '/assets/icon/icon_temp.svg';
import emoji from '/assets/image/emoji_temp.png';

export default function RollingPaper({ recepient }) {
  if (!recepient) return null;
  const { name, backgroundColor, backgroundImageURL, createdAt, messageCount } =
    recepient;

  const background = `RollingPaper--${backgroundColor}`;

  return (
    <div className="RollingPaper">
      {backgroundImageURL ? (
        <div
          className="RollingPaper--image"
          style={{ backgroundImage: `url(${backgroundImageURL})` }}
        >
          <div className="RollingPaper__profile">
            <h1>{name}</h1>
            <img src={profileImage} alt="profileImage" />
            <p>
              <b>{messageCount}</b>명이 작성했어요!
            </p>
          </div>
          <img src={emoji} alt="emoji" />
        </div>
      ) : (
        <div className={background}>
          <div className="RollingPaper__profile">
            <h1>{name}</h1>
            <img src={profileImage} alt="profileImage" />
            <p>
              <b>{messageCount}</b>명이 작성했어요!
            </p>
          </div>
          <img src={emoji} alt="emoji" />
        </div>
      )}
    </div>
  );
}
