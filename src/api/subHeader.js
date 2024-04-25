import { BASE_URL_RECIPIENT } from '../constants/url';

export const setPostEmoji = async (rollingPageId, method, emoji, type) => {
  try {
    await fetch(`${BASE_URL_RECIPIENT}${rollingPageId}/reactions/`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        emoji,
        type,
      }),
    });
  } catch (error) {
    throw new Error('이모지 POST 전송 실패 :' + error);
  }
};
