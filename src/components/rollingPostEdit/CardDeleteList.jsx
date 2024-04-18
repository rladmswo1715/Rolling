import React, { useState, useEffect, useMemo } from 'react';
import { useGetMessage } from '../../api/rollingPost';
import '../rollingPost/card/card.scss';
import EmptyCard from '../rollingPost/card/EmptyCard';
import Card from '../rollingPost/card/Card';
import './cardDeleteList.scss';
export default function CardDeleteList() {
  const { message, getMessage } = useGetMessage();

  const handleCardClick = () => {
    console.log('버튼 클릭!');
    return <Link to={<RollingPostEdit />} />;
  };

  const handleDeleteClick = () => {};

  useEffect(() => {
    getMessage(5850, 10, 0);
  }, []);

  const hasCard = message.length > 0;

  return hasCard ? (
    message.map((el) => {
      return (
        <div>
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
