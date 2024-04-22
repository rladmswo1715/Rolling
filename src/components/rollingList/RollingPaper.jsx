import ProfileList from '../layout/subHeader/ProfileList';
import Emoji from '../rollingPost/emoji/Emoji';
import './rollingPaper.scss';

export default function RollingPaper({ recipient }) {
  if (!recipient) return null;

  const {
    name,
    backgroundColor,
    backgroundImageURL,
    topReactions,
    recentMessages,
  } = recipient;

  const background = `RollingPaper__background RollingPaper--${backgroundImageURL ? 'image' : backgroundColor}`;

  const imageStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(${backgroundImageURL})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const isImageStyle = backgroundImageURL ? imageStyle : null;

  return (
    <div className="RollingPaper">
      <div className={background} style={isImageStyle}>
        <div className="RollingPaper--profile">
          <h1>{name}</h1>
          <ProfileList onComent={recentMessages} />
          <div className="RollingPaper--line"></div>
        </div>
        <div className="RollingPaper--emoji">
          {topReactions.map((emoji) => (
            <Emoji key={emoji.id} {...emoji} />
          ))}
        </div>
      </div>
    </div>
  );
}
