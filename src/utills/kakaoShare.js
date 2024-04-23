export const kakaoInitial = () => {
  window.Kakao.cleanup();
  window.Kakao.init('05743ed3cfb15137cfb8f330f2d22473');
};

export const kakaoShare = (onName) => {
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: `Rolling`,
      description: `${onName} 롤링을 소개합니다.`,
      imageUrl: `https://i.pinimg.com/originals/07/ce/fe/07cefe14f9b9e45f0e5f0a42a78f0747.gif`,
      link: {
        mobileWebUrl: 'https://rolling-5-7.netlify.app',
        webUrl: 'https://rolling-5-7.netlify.app',
      },
    },
    buttons: [
      {
        title: `${onName} 롤링 페이지로 이동`,
        link: {
          mobileWebUrl: 'https://rolling-5-7.netlify.app',
          webUrl: 'https://rolling-5-7.netlify.app',
        },
      },
    ],
  });
};
