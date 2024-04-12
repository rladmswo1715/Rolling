import { Link } from 'react-router-dom';
import './main.scss';
import mainImage1 from '/assets/image/image_main1.svg';
import mainImage2 from '/assets/image/image_main2.png';

export default function Main() {
  return (
    <section className='layout__main'>
      <div className='inner__size-ls inner__body'>
        <div className='main'>
          <div className='main__wrap'>
            <div className='main__wrap__point'>
              <div className='main__wrap__point--title'>Point.01</div>
              <div className='main__wrap__point--description'>
                <h1>누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요</h1>
                <p>로그인 없이 자유롭게 만들어요.</p>
              </div>
            </div>
            <img
              src={mainImage1}
              alt='mainImage1'
              className='main__wrap__image'
            />
          </div>
          <div className='main__wrap second'>
            <div className='main__wrap__point second'>
              <div className='main__wrap__point--title'>Point.02</div>
              <div className='main__wrap__point--description'>
                <h1>서로에게 이모지로 감정을 표현해보세요</h1>
                <p>롤링 페이퍼에 이모지를 추가할 수 있어요.</p>
              </div>
            </div>
            <img
              src={mainImage2}
              alt='mainImage2'
              className='main__wrap__image second'
            />
          </div>
          <Link to={'/list'}>
            <button className='button--fill-primary button__size-h56 main_button-box'>
              구경해보기
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
