import { BASE_URL_RECIPIENT } from '../constants/url';

export default async function getRollingList(
  { limit = 8, offset = 0, sort = '' },
  nextUri
) {
  const response = await fetch(
    nextUri
      ? nextUri
      : `${BASE_URL_RECIPIENT}?limit=${limit}&offset=${offset}&sort=${sort}`
  );
  if (!response.ok) {
    throw new Error('리뷰를 불러오는데 실패했습니다');
  }
  const res = await response.json();
  return res;
}
