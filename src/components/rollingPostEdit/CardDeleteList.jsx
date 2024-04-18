import React, { useState, useEffect, useMemo } from 'react';
import { useGetMessage } from '../../api/rollingPost';
import '../rollingPost/card/card.scss';
import EmptyCard from '../rollingPost/card/EmptyCard';
import Card from '../rollingPost/card/Card';
import './cardDeleteList.scss';
import { useParams } from 'react-router-dom';
export default function CardDeleteList() {
  const { message, getMessage } = useGetMessage();
  const { id } = useParams();

  const handleCardClick = () => {
    console.log('버튼 클릭!');
  };

  const handleDeleteClick = () => {};

  useEffect(() => {
    getMessage(id, 10, 0);
  }, []);

  const hasCard = message.length > 0;

  return hasCard ? (
    message.map((el) => {
      return (
        <div key={el.id}>
          <Card
            key={el.id}
            sender={el.sender}
            content={el.content}
            createdAt={el.createdAt}
            relationship={el.relationship}
            profileImageURL={el.profileImageURL}
          />
          <button
            className="button--outlined button__size-h36 before-icon btn-delete position_fixed"
            onClick={handleDeleteClick}
          />
        </div>
      );
    })
  ) : (
    <EmptyCard onClick={handleCardClick} />
  );
}
