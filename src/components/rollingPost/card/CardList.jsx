import React, { useCallback, useEffect, useState } from 'react';
import { useGetMessage } from '../../../api/rollingPost';
import './card.scss';
import EmptyCard from './EmptyCard';
import Card from './Card';
import { useParams } from 'react-router-dom';
import Modal from '../../../components/modal/Modal';

export default function CardList() {
  const { message, getMessage } = useGetMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasCard = message.length > 0;
  const { id } = useParams();
  const [clickedMessageId, setClickedMessageId] = useState();

  const handleCardClick = (messageId) => {
    setIsModalOpen(true);
    for (let a = 0; a < message.length; a++) {
      if (message[a].id === messageId) {
        setClickedMessageId(a);
      }
    }
  };

  // console.log(messageValue);

  useEffect(() => {
    getMessage(id, 10, 0);
  }, []);

  // useEffect(() => {
  //   console.log(message);
  // }, [message]);

  return (
    <>
      <EmptyCard />

      {hasCard
        ? message.map((el) => {
            return (
              <Card
                key={el.id}
                sender={el.sender}
                content={el.content}
                createdAt={el.createdAt}
                relationship={el.relationship}
                profileImageURL={el.profileImageURL}
                font={el.font}
                cardClick={() => {
                  handleCardClick(el.id);
                }}
              />
            );
          })
        : ''}
      {isModalOpen && (
        <Modal
          cardData={message[clickedMessageId]}
          isModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}
