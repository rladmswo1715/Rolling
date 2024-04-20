import React from 'react';
import './card.scss';
import plusIcon from '/assets/icon/icon_plus.svg';
import { useNavigate, useParams } from 'react-router-dom';
export default function EmptyCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleEmptyCardClick = () => {
    navigate(`/post/${id}/message`);
  };

  return (
    <button className="card" onClick={handleEmptyCardClick}>
      <div className="card--empty">
        <div className="card--img-container">
          <img src={plusIcon} alt="추가하기" />
        </div>
      </div>
    </button>
  );
}
