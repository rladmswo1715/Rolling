import React, { useState, useEffect, useMemo } from 'react';
import { useGetMessage } from '../../../api/rollingPost';
import './card.scss';
import EmptyCard from './EmptyCard';
import Card from './Card';

export default function CardList() {
  const { message, getMessage } = useGetMessage();

  const handleCardClick = () => {
    console.log('버튼 클릭!');
    return <Link to={<RollingPostEdit />} />;
  };

  useEffect(() => {
    getMessage(5852, 10, 0);
  }, []);

  const hasCard = message.length > 0;

  return hasCard ? (
    message.map((el) => {
      return (
        <Card
          key={el.id}
          sender={el.sender}
          content={el.content}
          createdAt={el.createdAt}
          relationship={el.relationship}
          profileImageURL={el.profileImageURL}
        />
      );
    })
  ) : (
    <EmptyCard onClick={handleCardClick} />
  );
}
