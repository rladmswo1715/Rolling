import './rollingPostCreate.scss';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PostToInput from '../../components/rollingCreate/postToInput/PostToInput';
import BackgroundOption from '../../components/rollingCreate/backgroundOption/BackgroundOption';
import CreateRollingPaper from '../../api/CreateRollingPaper';
import Toast from '../../components/toast/Toast';
import { useGetData } from '../../hooks/useGetData';
import { BASE_URL_RECIPIENT } from '../../constants/url';

function RollingPostCreate() {
  const [backgroundOption, setBackgroundOption] = useState({
    type: 'color',
    value: 'beige',
  });
  const [toastMessage, setToastMessage] = useState(''); // 토스트 메시지 상태 추가
  const [showToast, setShowToast] = useState(false); // 토스트 상태 추가
  const [isDuplicateName, setIsDuplicateName] = useState(false); // 중복 이름 상태 추가
  const [receiverName, setReceiverName] = useState(''); // 수신자 이름 상태 추가
  const navigate = useNavigate(); // useNavigate로 변경
  const { data } = useGetData(BASE_URL_RECIPIENT); // 데이터 가져오기 훅 사용

  useEffect(() => {
    // 데이터가 있고 수신자 이름이 있는 경우에만 중복 여부를 확인합니다.
    if (data && receiverName.trim() !== '') {
      const duplicateName = data.results.some(
        (result) => result.name === receiverName
      );
      setIsDuplicateName(duplicateName);
    }
  }, [data, receiverName]);

  function handleInputChange(value, isDuplicate) {
    setReceiverName(value);
    setIsDuplicateName(isDuplicate);
  }

  async function handleCreatePost() {
    if (isDuplicateName) return;
    setToastMessage('게시물을 생성 중입니다...');
    setShowToast(true);
    setTimeout(async () => {
      try {
        // CreateRollingPaper 함수가 프로미스를 반환하도록 변경
        const res = await CreateRollingPaper(receiverName, backgroundOption);
        // 페이지 이동
        navigate(`/post/${res.id}`);
      } catch (error) {
        console.error('게시물 생성 실패:', error);
        // 에러 처리
        setToastMessage('게시물 생성에 실패했습니다.');
        setShowToast(false);
      }
    }, 1500); // 1.5초 뒤에 실행
  }

  return (
    <section className="layout__create">
      <div className="inner__size-ms inner__body">
        <PostToInput
          onInputChange={handleInputChange}
          receiverName={receiverName}
        />
        <BackgroundOption
          onOptionChange={setBackgroundOption}
          backgroundOption={backgroundOption}
        />
        <div className="btn--container">
          <button
            className={`button--fill-primary button__size-h56 font-bold ${receiverName.trim() === '' ? 'disabled' : ''}`}
            onClick={handleCreatePost}
            disabled={receiverName.trim() === '' || isDuplicateName}
          >
            생성하기
          </button>
        </div>
        {showToast && <Toast message={toastMessage} />}
      </div>
    </section>
  );
}

export default RollingPostCreate;
