export const kakaoInitial = () => {
  window.Kakao.cleanup();
  window.Kakao.init('d35d6740e521fc00c19f16d97184f5e8');
};

export const kakaoShare = (onName, pageId) => {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: `Rolling`,
      description: `${onName} 롤링을 소개합니다.`,
      imageUrl: `https://i.pinimg.com/originals/07/ce/fe/07cefe14f9b9e45f0e5f0a42a78f0747.gif`,
      link: {
        mobileWebUrl: `https://rolling-5-7.netlify.app/post/${pageId}`,
        webUrl: `https://rolling-5-7.netlify.app/post/${pageId}`,
      },
    },
    buttons: [
      {
        title: `${onName} 롤링 페이지로 이동`,
        link: {
          mobileWebUrl: `https://rolling-5-7.netlify.app/post/${pageId}`,
          webUrl: `https://rolling-5-7.netlify.app/post/${pageId}`,
        },
      },
    ],
  });
};
