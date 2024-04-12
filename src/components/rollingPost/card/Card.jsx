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
        <button className="card card--flex">
          <div className="card--container">
            <div className="card--from-group">
              <div className="card--from-group--img profile-picture--large">
                <img src={mockImg} alt="목업 이미지" />
              </div>

              <div className="text-group">
                <div className="card--from">
                  <span className="from">From.</span>

                  <strong className="caller">김동훈</strong>
                </div>

                {/* 뱃지도 받아서 와야 함 */}
                <div className="badge">
                  <p className="badge--title">동료</p>
                </div>
              </div>
            </div>

            <div className="container">
              <p className="content">
                코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심
                또
                하세요!ddddddddddsdfsjfhsidfjlsdjfksdjlfjksdflajkdjflasjdlfkjsaldkjfkaksdjlkfjlsdjfsaj
              </p>
            </div>

            <div className="createdAt">2023.04.21</div>
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
