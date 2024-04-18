import '../rollingPost/card/card.scss';
import './cardDeleteList.scss';
import React, { useEffect } from 'react';
import { useGetMessage } from '../../api/rollingPost';
import { useParams } from 'react-router-dom';
import EmptyCard from '../rollingPost/card/EmptyCard';
import Card from '../rollingPost/card/Card';
import DeleteButton from './DeleteButton';

export default function CardDeleteList() {
  const { message, getMessage } = useGetMessage();
  const { id } = useParams();

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
          <DeleteButton id={el.id} />
        </div>
      );
    })
  ) : (
    <EmptyCard />
  );
}
