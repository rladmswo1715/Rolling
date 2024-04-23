import { useEffect } from 'react';
import { kakaoInitial, kakaoShare } from '../../utills/kakaoShare';
import './shareBox.scss';

export default function ShareBox({
  name,
  onToastMessage,
  isShareOpen,
  onShareOpen,
}) {
  const handleShareOpen = (value) => {
    onShareOpen((prev) => (value === false ? false : !prev));
  };

  // kakao 공유하기
  useEffect(() => {
    kakaoInitial();
  }, []);

  const handleURLShare = async () => {
    const shareURL = window.location.href;

    // 클립보드 복사
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareURL);
        onToastMessage('URL이 복사 되었습니다.');
      } catch (error) {
        throw new Error('클립보드 복사 실패: ' + error);
      }
    } else {
      throw new Error('현재 브라우저에서는 클립보드 기능을 지원하지 않습니다.');
    }

    // pc, mobile 공유화면
    if (navigator.share) {
      try {
        await navigator.share({
          title: '공유하기',
          text: '복사된 URL 주소 : ',
          url: shareURL,
        });
      } catch (error) {
        throw new Error('URL 공유 실패: ' + error);
      }
    } else {
      throw new Error(
        '현재 브라우저에서는 Web Share API 기능을 지원하지 않습니다'
      );
    }
    handleShareOpen(false);
  };

  return (
    <div className="dropdown share-box--wrap">
      <button
        className="button--outlined button__size-h36 before-icon btn-share"
        onClick={handleShareOpen}
      >
        <span className="unvisible">공유하기</span>
      </button>
      {isShareOpen && (
        <div className="dropdown__menu">
          <button
            className="item"
            onClick={() => {
              kakaoShare(name);
              handleShareOpen(false);
            }}
          >
            카카오톡 공유
          </button>
          <button className="item" onClick={handleURLShare}>
            URL 공유
          </button>
        </div>
      )}
    </div>
  );
}
