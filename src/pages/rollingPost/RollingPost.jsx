import './rollingPost.scss';
import { useEffect } from 'react';
import { useGetRecipient } from '../../api/rollingPost';
import {
  hasBackgroundImage,
  getBackgroundImage,
  getBackgroundColor,
} from '../../utills/dataToStyle';
import CardList from '../../components/rollingPost/card/CardList';

export default function RollingPost() {
  const { recipient, getRecipientData } = useGetRecipient();

  useEffect(() => {
    getRecipientData(5852);
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
        <div className="card__layout">
          <CardList />
        </div>
      </div>
    </section>
  );
}
