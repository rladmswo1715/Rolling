import ProfileList from '../layout/subHeader/ProfileList';
import Emoji from '../rollingPost/emoji/Emoji';
import './rollingPaper.scss';

const testArr = Array.from({ length: 97 }, (_, i) => i);
const emojiArr = Array.from({ length: 8 }, (_, i) => i);

export default function RollingPaper({ recepient }) {
  if (!recepient) return null;
  const {
    id,
    name,
    backgroundColor,
    backgroundImageURL,
    createdAt,
    messageCount,
  } = recepient;

  const background = `RollingPaper--${backgroundColor}`;
  const imageStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(${backgroundImageURL})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="RollingPaper">
      {backgroundImageURL ? (
        <div className="RollingPaper--image" style={imageStyle}>
          <div className="RollingPaper--profile">
            <h1>{name}</h1>
            <ProfileList arrayProps={testArr} />
          </div>
          <div className="RollingPaper--emoji">
            {emojiArr.slice(0, 3).map((data) => (
              <Emoji key={data} />
            ))}
          </div>
        </div>
      ) : (
        <div className={background}>
          <div className="RollingPaper--profile">
            <h1>{name}</h1>
            <ProfileList arrayProps={testArr} />
          </div>
          <div className="RollingPaper--emoji">
            {emojiArr.slice(0, 3).map((data) => (
              <Emoji key={data} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
