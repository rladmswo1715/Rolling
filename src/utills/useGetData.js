import { useCallback, useEffect, useState } from "react";

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
        throw new Error("요청이 실패했습니다.");
      }
    } catch (e) {
      setError(e); // 에러 상태 업데이트
    } finally {
      setIsLoading(false); // 데이터 가져오기 완료를 표시
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // 에러가 발생하면 alert 표시
  useEffect(() => {
    if (error) {
      alert("데이터를 불러오는 중 에러가 발생했습니다.");
    }
  }, [error]);

  return { data, isLoading, error }; // 데이터, 로딩 상태, 에러를 함께 반환
}
