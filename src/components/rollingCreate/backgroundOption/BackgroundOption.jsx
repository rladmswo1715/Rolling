import { useEffect } from "react";
import { useGetData } from "../../../hooks/useGetData";
import "./BackgroundOption.scss";
import iconselected from "/assets/icon/icon_selected.svg";

export default function BackgroundOption() {
  const { data, isLoading, error } = useGetData(
    "https://rolling-api.vercel.app/background-images/"
  );

  useEffect(() => {
    if (error) {
      alert("데이터를 불러오는 동안 오류가 발생했습니다.");
    }
  }, [error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="select-bg">
      <p className="select-bg__title"> 배경화면을 선택해 주세요. </p>
      <p className="select-bg__body">
        컬러를 선택하거나, 이미지를 선택할 수 있습니다.
      </p>
      <div class="button--toggle-box">
        <button type="button" class="button--toggle button__size-h40 active">
          컬러
        </button>
        <button type="button" class="button--toggle button__size-h40">
          이미지
        </button>
      </div>
      <div className="select-bg__colors">
        <div className="select-bg__colors--orange"></div>
        <div className="select-bg__colors--purple"></div>
        <div className="select-bg__colors--blue"></div>
        <div className="select-bg__colors--green"></div>
      </div>
      <div className="select-bg__images">
        {data.imageUrls.map((link) => (
          <div className="select-bg__images__container">
            <img
              src={link}
              alt="배경이미지 선택 옵션"
              className="select-bg__images__container__img"
            />
            <img src={iconselected} />
          </div>
        ))}

        {/* <div className="select-bg__images--1">
          <img src={data.imageUrls[0]} />
        </div>
        <div className="select-bg__images--2">
          <img src={data.imageUrls[1]} />
        </div>
        <div className="select-bg__images--3">
          <img src={data.imageUrls[2]} />
        </div>
        <div className="select-bg__images--4">
          <img src={data.imageUrls[3]} />
        </div> */}
      </div>
    </section>
  );
}
