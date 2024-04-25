import './card.scss';
import React from 'react';
import EmptyCard from './EmptyCard';
import Card from './Card';

export default function CardList({
  hasMessage,
  messageContents,
  handleCardClick,
  id,
  handleEmptyCardClick,
}) {
  return (
    <div className="cards__layout">
      <EmptyCard
        className="card"
        id={id}
        handleEmptyCardClick={handleEmptyCardClick}
      />
      <div className="card card__list">
        {hasMessage
          ? messageContents.map((el, index) => {
              return (
                <Card
                  key={el.id}
                  number={index}
                  sender={el.sender}
                  content={el.content}
                  createdAt={el.createdAt}
                  relationship={el.relationship}
                  profileImageURL={el.profileImageURL}
                  font={el.font}
                  cardClick={() => {
                    handleCardClick(index);
                  }}
                />
              );
            })
          : ''}
      </div>
    </div>
  );
}
