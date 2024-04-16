import { useState } from "react";

export default function NameInput() {
  const [userName,setUserName] = useState('');
  const [isNameBlank, setIsNameBlank] = useState(false);

  function handleSetUserName(e) {
    setUserName(e.target.value);
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
      {isNameBlank && <p class="error--message">값을 입력해주세요.</p>}
    </>
  )
}