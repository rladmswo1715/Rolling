import { useEffect, useState } from "react";
import { useGetData } from "../../../hooks/useGetData";
import "./backgroundOption.scss";
import iconselected from "/assets/icon/icon_selected.svg";
import { BASE_URL } from "../../../constants/url";

// 배경 이미지의 색상이름을 key로, 클래스 이름을 value 값으로 객체화
const COLORS = {
  beige: "select-bg__colors--orange",
  purple: "select-bg__colors--purple",
  blue: "select-bg__colors--blue",
  green: "select-bg__colors--green",
};

export default function BackgroundOption({ onOptionChange }) {
  const { data, isLoading, error } = useGetData(
    `${BASE_URL}background-images/`
  );

  const [isColorSelected, setColorSelected] = useState(true); // 컬러 선택 여부 track state
  const [selectedColor, setSelectedColor] = useState(Object.keys(COLORS)[0]); // 선택된  컬러 아이템 track state
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); // 선택된 이미지 아이템 track state

  useEffect(() => {
    if (error) {
      alert("데이터를 불러오는 동안 오류가 발생했습니다.");
    }
  }, [error]);

  // 컬러 handleclick 이벤트
  function handleColorClick(color) {
    setColorSelected(true);
    setSelectedColor(color);
    setSelectedImageIndex(null); // Reset selected image index
    // 부모 컴포넌트로 선택된 컬러 전달
    onOptionChange({ type: "color", value: color });
  }

  // 이미지 handleclick 이벤트
  function handleImageClick(index) {
    setColorSelected(false);
    setSelectedImageIndex(index);
    setSelectedColor(null); // Reset selected color
    // 부모 컴포넌트로 선택된 이미지 전달
    onOptionChange({ type: "image", value: data.imageUrls[index] });
  }

  return (
    <section className="select-bg">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <p className="select-bg__title"> 배경화면을 선택해 주세요. </p>
          <p className="select-bg__body">
            컬러를 선택하거나, 이미지를 선택할 수 있습니다.
          </p>
          <div className="button--toggle-box">
            <button
              type="button"
              className={`button--toggle button__size-h40 ${
                isColorSelected ? "active" : ""
              }`}
              onClick={() => {
                setColorSelected(true);
                setSelectedColor(Object.keys(COLORS)[0]); // 첫 컬러 요소를 선택
                setSelectedImageIndex(null); // 이미지 요소 초기화
              }}
            >
              컬러
            </button>
            <button
              type="button"
              className={`button--toggle button__size-h40 ${
                !isColorSelected ? "active" : ""
              }`}
              onClick={() => {
                setColorSelected(false);
                setSelectedImageIndex(0); // 첫 이미지 요소를 선택
                setSelectedColor(null); // 컬러 요소 초기화
              }}
            >
              이미지
            </button>
          </div>
          {isColorSelected ? (
            <div className="select-bg__colors">
              {Object.entries(COLORS).map(([colorName, className]) => (
                <div
                  key={colorName}
                  className={`${className} ${
                    selectedColor === colorName ? "selected" : ""
                  } `}
                  onClick={() => handleColorClick(colorName)}
                >
                  {selectedColor === colorName && (
                    <img
                      src={iconselected}
                      alt="선택 아이콘"
                      className="selected-icon"
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="select-bg__images">
              {data.imageUrls.map((link, index) => (
                <div
                  key={index}
                  className={`select-bg__images__container ${
                    selectedImageIndex === index ? "selected" : ""
                  }`}
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={link}
                    alt="배경이미지 선택 옵션"
                    className="select-bg__images__container__img"
                  />
                  {selectedImageIndex === index && (
                    <img
                      src={iconselected}
                      alt="선택 아이콘"
                      className="selected-icon"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
