import { useCallback, useEffect, useState } from 'react';

export function useGetData(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true); // 데이터 가져오는 중임을 표시
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        throw new Error('요청이 실패했습니다.');
      }
    } catch (error) {
      setError(error); // 에러 상태 업데이트
    } finally {
      setIsLoading(false); // 데이터 가져오기 완료를 표시
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error }; // 데이터, 로딩 상태, 에러를 함께 반환
}
