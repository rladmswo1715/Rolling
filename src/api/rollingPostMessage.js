import { BASE_URL_RECIPIENT } from '../constants/url';

export async function createMessageFetch(rollingId, data) {
  const response = await fetch(`${BASE_URL_RECIPIENT}${rollingId}/messages/`,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data) 
  });

  if(!response.ok) {
    throw new Error('메세지 생성에 실패하였습니다.');
  }

  return await response.json();
}

