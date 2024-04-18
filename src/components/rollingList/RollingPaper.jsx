import ProfileList from '../layout/subHeader/ProfileList';
import Emoji from '../rollingPost/emoji/Emoji';
import './rollingPaper.scss';
import { BASE_URL_RECIPIENT } from '../../constants/url';

async function setPostEmoji(id, method, emoji, type) {
  try {
    const response = await fetch(`${BASE_URL_RECIPIENT}${id}/reactions/`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        emoji,
        type,
      }),
    });
    if (!response.ok) {
      throw new Error(`Failed to ${type} reaction`);
    }
  } catch (e) {
    throw new Error(e);
  }
}

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
