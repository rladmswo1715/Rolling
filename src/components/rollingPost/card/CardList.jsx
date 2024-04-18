import React, { useEffect } from 'react';
import { useGetMessage } from '../../../api/rollingPost';
import './card.scss';
import EmptyCard from './EmptyCard';
import Card from './Card';
import { useNavigate, useParams } from 'react-router-dom';

export default function CardList() {
  const { message, getMessage } = useGetMessage();
  const navigate = useNavigate();
  const id = useParams();

  const handleEmptyCardClick = () => {
    navigate(`/post/${id}/message`);
  };

  useEffect(() => {
    getMessage(id, 10, 0);
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
    <EmptyCard onClick={handleEmptyCardClick} />
  );
}
