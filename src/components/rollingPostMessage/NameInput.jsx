import React, { useContext, useState } from 'react';
import { MsgCreateDataSet } from '../../context/MsgCreateDataSet';
import { useFormDataSet } from '../../hooks/useFormDataSet';

function NameInput() {
  const [userName,setUserName] = useState('');
  const [isNameBlank, setIsNameBlank] = useState(false);
  const {setData} = useContext(MsgCreateDataSet);


  function handleSetUserName(e) {
    setUserName(e.target.value);
  }

  function handleSetUserName(e) {
    const value = e.target.value;
    if (value.length <= 14) {
      setUserName(e.target.value);
    } else {
      alert('최대 14자까지 입력 가능합니다.');
      return;
    }
  }

  useFormDataSet(setData, 'sender', userName);

  function handleInputFocusOut(e) {
    const isUserName = (userName === '');
    
    e.target.classList.toggle('error', isUserName);
    isUserName ? setIsNameBlank(true) : setIsNameBlank(false);
  }
  
  return (
    <>
      <input 
        type="text" 
        value={userName} 
        placeholder="이름을 입력해 주세요." 
        className="input__element" 
        onChange={handleSetUserName} 
        onBlur={handleInputFocusOut}
        maxLength="14"
      />
      {isNameBlank && <p className="error--message">값을 입력해주세요.</p>}
    </>
  )
}

export default React.memo(NameInput);