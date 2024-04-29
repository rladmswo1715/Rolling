import { BASE_URL_RECIPIENT } from '../../constants/url';
import { useGetData } from '../../hooks/useGetData';
import ProfileList from '../layout/subHeader/ProfileList';
import Emoji from '../rollingPost/emoji/Emoji';
import './rollingPaper.scss';

export default function RollingPaper({ recipient }) {
  if (!recipient) return null;
  const { data: getMessage } = useGetData(
    `${BASE_URL_RECIPIENT}${recipient.id}/messages/`
  );
  const { name, backgroundColor, backgroundImageURL, topReactions } = recipient;

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
          <ProfileList coment={getMessage} />
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
