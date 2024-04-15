import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostToInput from "../../components/rollingCreate/postToInput/PostToInput";
import BackgroundOption from "../../components/rollingCreate/backgroundOption/BackgroundOption";
import "./rollingPostCreate.scss";
import CreateRollingPaper from "../../api/CreateRollingPaper";

export default function RollingCreate() {
  const [inputValue, setInputValue] = useState("");
  const [backgroundOption, setBackgroundOption] = useState({
    type: "color",
    value: "beige",
  });
  const navigate = useNavigate(); // useNavigate로 변경

  function handleInputChange(value) {
    setInputValue(value);
  }

  function handleBackgroundOptionChange(option) {
    setBackgroundOption(option);
  }

  async function handleCreatePost() {
    const res = await CreateRollingPaper(inputValue, backgroundOption);
    navigate(`/post/${res.id}`); // useNavigate로 페이지 이동
  }

  return (
    <section className="layout__create">
      <div className="inner__size-ms inner__body">
        <PostToInput
          onInputChange={handleInputChange}
          inputValue={inputValue}
        />
        <BackgroundOption
          onOptionChange={handleBackgroundOptionChange}
          backgroundOption={backgroundOption}
        />

        <div className="btn--container">
          <button
            className={`button--fill-primary button__size-h56 font-bold ${inputValue.trim() === "" ? "disabled" : ""}`}
            onClick={handleCreatePost}
            disabled={inputValue.trim() === ""}
          >
            생성하기
          </button>
        </div>
      </div>
    </section>
  );
}
