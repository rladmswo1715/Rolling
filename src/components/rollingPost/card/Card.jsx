import './card.scss';
import '../../../styles/components.scss';
import { formatDate } from '../../../utills/time';
import Badge from './Badge';
import CardContent from './CardContent';

export default function Card({
  sender,
  content,
  createdAt,
  relationship,
  profileImageURL,
  font,
  cardClick,
}) {
  const formatedDate = formatDate(createdAt);
  return (
    <button className="card" onClick={cardClick}>
      <div className="card--container">
        <div className="card--from-group">
          <div className="card--from-group--img profile-picture--large">
            <img src={profileImageURL} alt="프로필 이미지" />
          </div>

          <div className="card--profile-text-group">
            <div className="card--from">
              <span>From.</span>
              <strong className="card--profile-text-group--sender">
                {sender}
              </strong>
            </div>
            <Badge relationship={relationship} />
          </div>
        </div>
        <div className="content">
          <CardContent content={content} font={font} />
        </div>
        <div className="createdAt">{formatedDate}</div>
      </div>
    </button>
  );
}
