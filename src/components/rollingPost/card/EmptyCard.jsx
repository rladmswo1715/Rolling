import React from 'react';
import './card.scss';
import plusIcon from '/assets/icon/icon_plus.svg';
export default function EmptyCard({ handleEmptyCardClick }) {
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
