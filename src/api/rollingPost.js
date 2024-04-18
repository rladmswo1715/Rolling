import { useState, useCallback } from 'react';
import { BASE_URL_RECIPIENT } from '../constants/url';

export function useGetRecipient() {
  const [recipient, setRecipients] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getRecipientData = useCallback(async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL_RECIPIENT}${id}/`);
      if (response.ok) {
        const res = await response.json();
        setRecipients(res);
        setIsLoading(false);
      } else {
        throw new Error('데이터를 받아오는데 실패했습니다!');
      }
    } catch (error) {
      setError(error);
    }
  }, []);

  return { recipient, isLoading, error, getRecipientData };
}

export function useGetMessage() {
  const [message, setMessage] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getMessage = useCallback(async (id, limit = 8, offset = 0) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${BASE_URL_RECIPIENT}${id}/messages/?limit=${limit}&offset=${offset}`
      );
      if (response.ok) {
        const res = await response.json();
        setMessage(res.results);
        setIsLoading(false);
      } else {
        throw new Error('데이터를 받아오는데 실패했습니다!');
      }
    } catch (error) {
      setError(error);
    }
  }, []);

  return { message, isLoading, error, getMessage };
}
