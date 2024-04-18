import './rollingPost.scss';
import { useEffect } from 'react';
import { useGetRecipient } from '../../api/rollingPost';
import {
  hasBackgroundImage,
  getBackgroundImage,
  getBackgroundColor,
} from '../../utills/dataToStyle';
import CardList from '../../components/rollingPost/card/CardList';
import { useParams } from 'react-router-dom';

export default function RollingPost() {
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
