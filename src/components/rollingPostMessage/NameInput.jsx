import { useState } from "react";

export default function NameInput() {
  const [userName,setUserName] = useState('');

  function handleSetUserName(e) {
    setUserName(e.target.value);
  }
  
  return (
    <input type="text" value={userName} placeholder="이름을 입력해 주세요." className="input__element" onChange={handleSetUserName} />
  )
}