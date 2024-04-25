import { BASE_URL_RECIPIENT } from '../constants/url';

export default async function createRollingPaper(inputValue, backgroundOption) {
  try {
    // 생성하기 버튼을 누를 때 API로 보낼 데이터
    const postData = {
      team: '5-7',
      name: inputValue.trim(), // 입력된 값
    };

    if (backgroundOption.type === 'color') {
      postData.backgroundColor = backgroundOption.value;
    } else {
      postData.backgroundImageURL = backgroundOption.value;
      postData.backgroundColor = 'beige';
    }

    // POST 요청 보내기
    const response = await fetch(BASE_URL_RECIPIENT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      // POST 요청이 성공하면 응답 데이터 반환
      return await response.json(); 
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || '요청이 실패했습니다.');
    }
  } catch (error) {
    // 네트워크 오류 또는 기타 예외적인 상황을 처리
    throw new Error('요청을 처리하는 동안 문제가 발생했습니다.');
  }
}
