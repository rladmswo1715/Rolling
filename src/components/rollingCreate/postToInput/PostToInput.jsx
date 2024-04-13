import { useState } from "react";
import "./PostToInput.scss";

export default function PostToInput({ onInputChange }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleBlur = () => {
    if (inputValue.trim() === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    onInputChange(value); // 부모 컴포넌트로 input value를 전달
  };

  return (
    <section className="post-to-box">
      <p className="post-to-box__desc"> To. </p>
      <input
        type="text"
        className={`input__element ${error ? "error" : ""}`}
        placeholder="받는 사람 이름을 입력해 주세요"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <p className="error--message">값을 입력해 주세요.</p>}
    </section>
  );
}
