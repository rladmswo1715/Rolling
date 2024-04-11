import './card.scss';
import '../../../styles/components.scss';
import { Link } from 'react-router-dom';
import RollingPostEdit from '../../../pages/rollingPostEdit/RollingPostEdit';
import plusIcon from '../../../assets/icon/icon_plus.svg';
import mockImg from './mock_img.png';
import { useState } from 'react';

function Card() {
  const [hasCard, setHasCard] = useState(false);

  const handleCardClick = () => {
    console.log('버튼 클릭!');
    setHasCard(true);
    return <Link to={<RollingPostEdit />} />;
  };

  return (
    <>
      {hasCard ? (
        <button className="card">
          <div className="card--from-group">
            <div className="card--from-group--title">
              <img src={mockImg} alt="목업 이미지" />
              {/* TODO : From 뒤에 이름은 받아서 와야 함 */}
              <div className="">
                <span>From.김동훈</span>
                {/* 뱃지도 받아서 와야 함 */}
                <span>동료</span>
              </div>
            </div>
          </div>
        </button>
      ) : (
        <button className="card" onClick={handleCardClick}>
          <div className="card--empty">
            <div className="card--img-container">
              <img src={plusIcon} alt="추가하기" />
            </div>
          </div>
        </button>
      )}
    </>
  );
}

export default Card;
