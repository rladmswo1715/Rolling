import PostToInput from "../../components/rollingCreate/postToInput/PostToInput";
import BackgroundOption from "../../components/rollingCreate/backgroundOption/BackgroundOption";
import "./rollingCreate.scss";
import { useState } from "react";

export default function RollingCreate() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <section className="layout__create">
      <div className="inner__size-ms inner__body">
        <PostToInput onInputChange={handleInputChange} />
        <BackgroundOption />

        <div className="btn--container">
          <button
            className="button--fill-primary button__size-h56 font-bold"
            disabled={inputValue.trim() === "" ? "true" : ""}
          >
            생성하기
          </button>
        </div>
      </div>
    </section>
  );
}
