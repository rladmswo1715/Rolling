import './card.scss';
import { Link } from 'react-router-dom';
import RollingPostEdit from '../../../pages/rollingPostEdit/RollingPostEdit';
import plusIcon from '../../../assets/icon/icon_plus.svg';
import { useState } from 'react';

function Card() {
  const [hasCard, setHasCard] = useState(false);

  const handleCardClick = () => {
    console.log('버튼 클릭!');
    return <Link to={<RollingPostEdit />} />;
  };

  return (
    <>
      {hasCard ? (
        <button className="card" onClick={handleCardClick}>
          <div className="card--empty">
            <img src={plusIcon} alt="추가하기" />
          </div>
        </button>
      ) : (
        <button>
          <div></div>
        </button>
      )}
    </>
  );
}

export default Card;
