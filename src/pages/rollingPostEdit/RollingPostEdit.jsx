import './rollingPostEdit.scss';
import { useEffect } from 'react';
import { useGetRecipient } from '../../api/rollingPost';
import {
  hasBackgroundImage,
  getBackgroundImage,
  getBackgroundColor,
} from '../../utills/dataToStyle';
import CardDeleteList from '../../components/rollingPostEdit/CardDeleteList';
import { useParams } from 'react-router-dom';

export default function RollingPostEdit() {
  const { recipient, getRecipientData } = useGetRecipient();
  const id = useParams();

  useEffect(() => {
    getRecipientData(id);
  }, []);

  console.log(recipient);

  return (
    <section>
      <div
        className={
          hasBackgroundImage(recipient)
            ? getBackgroundImage(recipient)
            : getBackgroundColor(recipient)
        }
      >
        <div className="button__layout">
          <button className="button__delete">삭제하기</button>
        </div>
        <div className="cards__layout">
          <CardDeleteList />
        </div>
      </div>
    </section>
  );
}
