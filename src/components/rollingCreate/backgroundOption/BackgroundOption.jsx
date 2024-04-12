import { useGetData } from "../../../utills/useGetData";
import "./BackgroundOption.scss";
import icon_selected from "../../../assets/icon/icon_selected.svg";

export default function BackgroundOption() {
  const { data, isLoading, error } = useGetData(
    "https://rolling-api.vercel.app/background-images/"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="select-bg">
      <p className="select-bg__title"> 배경화면을 선택해 주세요. </p>
      <p className="select-bg__body">
        컬러를 선택하거나, 이미지를 선택할 수 있습니다.
      </p>
      <button className="select-bg__button">컬러/이미지 선택 버튼 </button>
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
            <img src={icon_selected} />
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
