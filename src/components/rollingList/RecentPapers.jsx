import RollingPaper from './RollingPaper';
import './PapersStyles.scss';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiperStyles.scss';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import getRollingList from '../../api/rollingList';
import Loading from '../loading/Loading';

export default function RecentPapers() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [recipients, setRecipients] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextUri, setNextUri] = useState(null);

  const handleLoad = async (options, nextUri) => {
    try {
      setError(null);
      const { results, next } = await getRollingList(options, nextUri);
      setNextUri(next);
      if (options.offset === 0) {
        setRecipients(results);
      } else {
        setRecipients((prevRecipients) => [...prevRecipients, ...results]);
      }
    } catch (error) {
      setError(error);
      return;
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    handleLoad({}, nextUri);
  };

  const handleSlideChangeEnd = (swiper) => {
    // Swiper 객체를 이용하여 현재 슬라이드의 인덱스 확인
    setCurrentIndex(swiper.realIndex);
    // 슬라이드가 끝났을 경우 API 호출 실행
    if (swiper.isEnd && nextUri) {
      handleLoadMore();
    }
  };
  useEffect(() => {
    handleLoad({ limit: 8, offset: 0 });
  }, []);

  return (
    <div className="PapersStyles">
      <h1 className="PapersStyles--title">최근에 만든 롤링 페이퍼 ⭐️</h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="PapersStyles--papers">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={'auto'}
            centeredSlides={false}
            spaceBetween={30}
            pagination={{
              type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              1250: {
                slidesPerView: 4,
              },
            }}
            onSlideChangeTransitionEnd={handleSlideChangeEnd}
            initialSlide={currentIndex}
            slidesPerGroup={2}
          >
            {recipients.map((recipient, index) => {
              return (
                <SwiperSlide key={`${recipient.id}-${index}`}>
                  <Link to={`/post/${recipient.id}`}>
                    <RollingPaper recipient={recipient} />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </div>
  );
}
