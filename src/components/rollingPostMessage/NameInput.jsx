import React, { useContext } from 'react';
import { useState } from 'react';
import { MsgCreateDataSet } from '../../context/MsgCreateDataSet';

function NameInput() {
  const [userName,setUserName] = useState('');
  const [isNameBlank, setIsNameBlank] = useState(false);
  const {setData} = useContext(MsgCreateDataSet);


  function handleSetUserName(e) {
    setUserName(e.target.value);

    setData((prevData) => ({
      ...prevData,
      name: userName
    }));
  }

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
      />
      {isNameBlank && <p className="error--message">값을 입력해주세요.</p>}
    </>
  )
}

export default React.memo(NameInput);