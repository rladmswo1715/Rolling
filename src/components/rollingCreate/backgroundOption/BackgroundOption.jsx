import "./BackgroundOption.scss";

export default function BackgroundOption() {
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
    </section>
  );
}
