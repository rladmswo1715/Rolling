import { useEffect, useState } from "react";
import "./shareBox.scss";
import kakaoImg from '/assets/image/kakao_share_image.png'
const { Kakao } = window;

export default function ShareBox() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const handleDoropDwonOpen = () => {
    setIsShareOpen((prev) => !prev);
  };
  const [copied, setCopied] = useState(false);

  const handleURLCopy = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 5000); // 5초 후에 토스트 메시지 사라짐
      })
      .catch((error) => {
        console.error("클립보드 복사 실패:", error);
      });
  };

  // 카카오톡 공유하기 
  useEffect(()=>{
    Kakao.cleanup();
    Kakao.init(import.meta.env.VITE_KAKAO_KEY);
  },[])

  const handleKaKaoShare = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `Rolling`,
        description: `${'홍길동'} 롤링을 소개합니다.`,
        imageUrl:`https://i.pinimg.com/originals/07/ce/fe/07cefe14f9b9e45f0e5f0a42a78f0747.gif`,
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      buttons: [
        {
          title: `${'홍길동'} 롤링 페이지로 이동`,
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      ],
    })
  }
  
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
          <button className="item" onClick={handleKaKaoShare}>카카오톡 공유</button>
          <button className="item" onClick={handleURLCopy}>URL 공유</button>
        </div>
      )}
    </div>
  );
}
