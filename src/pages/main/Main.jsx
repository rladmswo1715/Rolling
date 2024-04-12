import "./main.scss";
import mainImage1 from "../../assets/image/image_main1.svg";
import mainImage2 from "../../assets/image/image_main2.svg";

export default function Main() {
  return (
    <section className="main layout__main">
      <div className="main__wrap">
        <div className="main__wrap__point">
          <div className="main__wrap__point__title">Point.01</div>
          <div className="main__wrap__point__description">
            <h1>누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요</h1>
            <p>로그인 없이 자유롭게 만들어요.</p>
          </div>
        </div>
        <div className="main__wrap__image">
          <img src={mainImage1} alt="mainImage1" />
        </div>
      </div>
      <div className="main__wrap">
        <div>
          <img src={mainImage2} alt="mainImage2" />
        </div>
        <div className="main__wrap__point">
          <div className="main__wrap__point__title">Point.02</div>
          <div className="main__wrap__point__description">
            <h1>서로에게 이모지로 감정을 표현해보세요</h1>
            <p>롤링 페이퍼에 이모지를 추가할 수 있어요.</p>
          </div>
        </div>
      </div>
      <button className="button-temp">구경해보기</button>
    </section>
  );
}
