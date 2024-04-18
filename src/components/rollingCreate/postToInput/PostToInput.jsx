import React, { useState, useEffect } from 'react';
import './postToInput.scss';
import { BASE_URL_RECIPIENT } from '../../../constants/url';
import { useGetData } from '../../../hooks/useGetData';

function PostToInput({ onInputChange }) {
  const [receiverName, setReceiverName] = useState('');
  const [error, setError] = useState('');
  const { data: recipients, error: recipientsError } = useGetData(
    `${BASE_URL_RECIPIENT}`
  );

  useEffect(() => {
    if (recipientsError) {
      console.error('데이터를 불러오는 데 실패했습니다:', recipientsError);
    }
  }, [recipientsError]); // 에러가 발생할 때 콘솔에 에러 출력

  async function checkDuplicateName(name) {
    if (!recipients) return false; // 데이터가 로드되지 않은 경우 바로 false 반환
    const duplicateName = recipients.results.some(
      (result) => result.name === name
    );
    return duplicateName;
  }
  async function handleBlur() {
    if (!receiverName.trim()) {
      setError('값을 입력해주세요.');
    } else if (await checkDuplicateName(receiverName)) {
      setError('중복된 이름이 있습니다.');
    } else {
      setError('');
    }
  }
  function handleChange(e) {
    const value = e.target.value;
    if (value.length <= 14) {
      setReceiverName(value);
      onInputChange(value); // 부모 컴포넌트로 input value를 전달
      setError(''); // 에러 초기화
    } else {
      setError('최대 14자까지 입력 가능합니다.');
    }
  }

  return (
    <section className="post-to-box">
      <p className="post-to-box__desc"> To. </p>
      <input
        type="text"
        className={`input__element ${error ? 'error' : ''}`}
        placeholder="받는 사람 이름을 입력해 주세요"
        value={receiverName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <p className="error--message">{error}</p>}
    </section>
  );
}

export default PostToInput;
