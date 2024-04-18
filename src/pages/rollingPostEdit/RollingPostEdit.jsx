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
import { BASE_URL_RECIPIENT } from '../../constants/url';
export default function RollingPostEdit() {
  const { recipient, getRecipientData } = useGetRecipient();
  const { id } = useParams();

  const hasCard = recipient.length > 0;

  useEffect(() => {
    getRecipientData(id);
  }, []);

  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`${BASE_URL_RECIPIENT}${id}/`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('롤링 페이퍼를 삭제하는데 실패했습니다');
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div
        className={
          hasBackgroundImage(recipient)
            ? getBackgroundImage(recipient)
            : getBackgroundColor(recipient)
        }
      >
        {hasCard ? (
          <div className="button__layout">
            <button className="button__delete" onClick={handleDeleteClick}>
              삭제하기
            </button>
          </div>
        ) : (
          ''
        )}
        <div className="cards__layout">
          <CardDeleteList />
        </div>
      </div>
    </section>
  );
}
