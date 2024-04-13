import { useState } from "react";
import "./PostToInput.scss";

export default function PostToInput() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleBlur = () => {
    if (inputValue.trim() === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <section className="post-to-box">
      <p className="post-to-box__desc"> To. </p>
      <input
        type="text"
        className={`input__element ${error ? "error" : ""}`}
        placeholder="받는 사람 이름을 입력해 주세요"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleBlur}
      />
      {error && <p className="error--message">값을 입력해 주세요.</p>}
    </section>
  );
}
