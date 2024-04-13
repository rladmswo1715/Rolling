import { useEffect, useState } from "react";
import { useGetData } from "../../../utills/hooks/useGetData";
import "./BackgroundOption.scss";
import iconselected from "/assets/icon/icon_selected.svg";

export default function BackgroundOption() {
  const { data, isLoading, error } = useGetData(
    "https://rolling-api.vercel.app/background-images/"
  );

  const [isColorSelected, setColorSelected] = useState(true); // 컬러 선택 여부 track state
  const [selectedItem, setSelectedItem] = useState(null); // 선택된 아이템 track state

  useEffect(() => {
    if (error) {
      alert("데이터를 불러오는 동안 오류가 발생했습니다.");
    }
  }, [error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // 배경 이미지의 색상이름을 key로, 클래스 이름을 value 값으로 객체화
  const colors = {
    orange: "select-bg__colors--orange",
    purple: "select-bg__colors--purple",
    blue: "select-bg__colors--blue",
    green: "select-bg__colors--green",
  };

  // 컬러 handlclick 이벤트
  const handleColorClick = (color) => {
    setColorSelected(true);
    setSelectedItem(color);
  };

  // 이미지 handleclick 이벤트
  const handleImageClick = (index) => {
    setColorSelected(false);
    setSelectedItem(index);
  };

  return (
    <section className="select-bg">
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
          onClick={() => setColorSelected(true)}
        >
          컬러
        </button>
        <button
          type="button"
          className={`button--toggle button__size-h40 ${
            !isColorSelected ? "active" : ""
          }`}
          onClick={() => setColorSelected(false)}
        >
          이미지
        </button>
      </div>
      {isColorSelected ? (
        <div className="select-bg__colors">
          {Object.entries(colors).map(([colorName, className]) => (
            <div
              key={colorName}
              className={`${className} ${
                selectedItem === colorName ? "selected" : ""
              } `}
              onClick={() => handleColorClick(colorName)}
            >
              {selectedItem === colorName && (
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
                selectedItem === index ? "selected" : ""
              }`}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={link}
                alt="배경이미지 선택 옵션"
                className="select-bg__images__container__img"
              />
              {selectedItem === index && (
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
    </section>
  );
}
