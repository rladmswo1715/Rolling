import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostToInput from '../../components/rollingCreate/postToInput/PostToInput';
import BackgroundOption from '../../components/rollingCreate/backgroundOption/BackgroundOption';
import './rollingPostCreate.scss';
import CreateRollingPaper from '../../api/CreateRollingPaper';

export default function RollingPostCreate() {
  const [receiverName, setReceiverName] = useState('');
  const [backgroundOption, setBackgroundOption] = useState({
    type: 'color',
    value: 'beige',
  });
  const navigate = useNavigate(); // useNavigate로 변경

  function handleInputChange(value) {
    setReceiverName(value);
  }

  function handleBackgroundOptionChange(option) {
    setBackgroundOption(option);
  }

  async function handleCreatePost() {
    const res = await CreateRollingPaper(receiverName, backgroundOption);
    navigate(`/post/${res.id}`); // useNavigate로 페이지 이동
  }

  return (
    <section className="layout__create">
      <div className="inner__size-ms inner__body">
        <PostToInput
          onInputChange={handleInputChange}
          receiverName={receiverName}
        />
        <BackgroundOption
          onOptionChange={handleBackgroundOptionChange}
          backgroundOption={backgroundOption}
        />
        <div className="btn--container">
          <button
            className={`button--fill-primary button__size-h56 font-bold ${receiverName.trim() === '' ? 'disabled' : ''}`}
            onClick={handleCreatePost}
            disabled={receiverName.trim() === ''}
          >
            생성하기
          </button>
        </div>
      </div>
    </section>
  );
}
