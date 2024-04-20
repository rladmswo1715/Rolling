import './shareBox.scss';
import { useEffect, useState } from 'react';
import { kakaoShare } from '../../../utills/kakaoShare';
import Toast from '../../toast/Toast';

const { Kakao } = window;
const shareURL = window.location.href;

export default function ShareBox({ name }) {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isShowToast, setIsShowToast] = useState(false);
  const [messageText, setMessageText] = useState('');

  // kakao 공유하기
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('05743ed3cfb15137cfb8f330f2d22473');
  }, [Kakao]);

  const handleDoropDwonOpen = () => {
    setIsShareOpen((prev) => !prev);
  };

  const handleToast = (message) => {
    setMessageText(message);
    setIsShowToast(true);
    setTimeout(() => setIsShowToast(false), 2000);
  };

  // url 공유하기
  const handleURLShare = async () => {
    try {
      // 클립보드 복사
      if (navigator.clipboard) {
        await navigator.clipboard
          .writeText(shareURL)
          .then(() => {
            handleToast('URL이 복사 되었습니다.');
          })
          .catch((error) => {
            handleToast('클립보드 복사 실패');
            console.log(error);
          });
      }

      // pc, mobile 공유화면
      if (navigator.share) {
        await navigator.share({
          title: '공유하기',
          text: '복사된 URL 주소 : ',
          url: shareURL,
        });
      } else {
        handleToast('Web Share API를 지원하지 않는 브라우저입니다.');
      }
    } catch (error) {
      handleToast('URL 공유 실패');
      console.log(error);
    }
  };

  return (
    <div className="dropdown share-box--wrap">
      <button
        className="button--outlined button__size-h36 before-icon btn-share"
        onClick={handleDoropDwonOpen}
      >
        <span className="unvisible">공유하기</span>
      </button>
      {isShareOpen && (
        <div className="dropdown__menu">
          <button className="item" onClick={() => kakaoShare(name)}>
            카카오톡 공유
          </button>
          <button className="item" onClick={handleURLShare}>
            URL 공유
          </button>
        </div>
      )}
      {isShowToast && <Toast message={messageText} />}
    </div>
  );
}
