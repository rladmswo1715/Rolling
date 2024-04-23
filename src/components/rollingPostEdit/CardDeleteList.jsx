import '../rollingPost/card/card.scss';
import './cardDeleteList.scss';
import React from 'react';

import { useParams } from 'react-router-dom';
import EmptyCard from '../rollingPost/card/EmptyCard';
import Card from '../rollingPost/card/Card';
import DeleteButton from './DeleteButton';

export default function CardDeleteList({
  hasMessage,
  messageContents,
  handleDeleteMessageClick,
}) {
  return hasMessage ? (
    messageContents.map((el, index) => {
      return (
        <div key={el.id}>
          <Card
            id={el.id}
            number={index}
            sender={el.sender}
            content={el.content}
            createdAt={el.createdAt}
            relationship={el.relationship}
            profileImageURL={el.profileImageURL}
            font={el.font}
          />
          {/* Card와 DeleteButton은 서로 다른 unique한 키가 필요하다고 한다. 그래서 el.id에 100000을 더해서 구별했음. */}
          <DeleteButton
            id={el.id}
            key={el.id + 100000}
            number={index}
            handleDeleteMessageClick={handleDeleteMessageClick}
          />
        </div>
      );
    })
  ) : (
    <EmptyCard />
  );
}
