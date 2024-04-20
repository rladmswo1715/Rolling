import './rollingPost.scss';
import { useEffect, useState } from 'react';
import { useGetMessage, useGetRecipient } from '../../api/rollingPost';
import {
  hasBackgroundImage,
  getBackgroundImage,
  getBackgroundColor,
} from '../../utills/dataToStyle';
import CardList from '../../components/rollingPost/card/CardList';
import { useParams } from 'react-router-dom';

export default function RollingPost() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { recipient, getRecipientData } = useGetRecipient();
  const { id } = useParams();

  useEffect(() => {
    getRecipientData(id);
  }, []);

  return (
    <section>
      <div
        className={
          hasBackgroundImage(recipient)
            ? getBackgroundImage(recipient)
            : getBackgroundColor(recipient)
        }
      >
        <div className="cards__layout">
          <CardList />
        </div>
      </div>
    </section>
  );
}
// card에서 바꾼 상태를 어떻게 modal에 줄 수 있지??
// rollingPost

// CardList     modal

// Card
