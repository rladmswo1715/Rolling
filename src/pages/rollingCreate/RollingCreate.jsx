import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostToInput from "../../components/rollingCreate/postToInput/PostToInput";
import BackgroundOption from "../../components/rollingCreate/backgroundOption/BackgroundOption";
import "./rollingCreate.scss";

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
    try {
      // 생성하기 버튼을 누를 때 API로 보낼 데이터
      const postData = {
        team: "5-7",
        name: inputValue.trim(), // 입력된 값
      };

      if (backgroundOption.type === "color") {
        postData.backgroundColor = backgroundOption.value;
      } else if (backgroundOption.type === "image") {
        postData.backgroundImageURL = backgroundOption.value;
        postData.backgroundColor = "beige";
      }

      // POST 요청 보내기
      const response = await fetch(
        "https://rolling-api.vercel.app/5-7/recipients/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (response.ok) {
        // POST 요청이 성공하면 페이지 이동
        const responseData = await response.json(); // 응답 데이터를 JSON 형식으로 파싱
        const newId = responseData.id;
        navigate(`/post/${newId}`); // useNavigate로 페이지 이동
      } else {
        // POST 요청이 실패한 경우 에러 처리
        const responseData = await response.json(); // 서버에서 반환된 응답을 JSON 형식으로 파싱
        console.error("POST request failed:", responseData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
