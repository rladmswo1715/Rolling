import React, { useEffect } from 'react';
import { useGetMessage } from '../../../api/rollingPost';
import './card.scss';
import EmptyCard from './EmptyCard';
import Card from './Card';
import { useParams } from 'react-router-dom';

export default function CardList() {
  const { message, getMessage } = useGetMessage();
  const hasCard = message.length > 0;
  const { id } = useParams();

  useEffect(() => {
    getMessage(id, 10, 0);
  }, []);

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
    <EmptyCard />
  );
}
