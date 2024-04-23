import RollingPaper from './RollingPaper';
import './popularPapers.scss';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiperStyles.scss';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function PopularPapers({ recipients }) {
  if (!recipients) return null;
  const [swiperRef, setSwiperRef] = useState(null);

  const [recipients, setRecipients] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextUri, setNextUri] = useState(null);

  const popularRecipients = recipients.slice();

  // 이모지 많은 순으로 정렬
  popularRecipients.sort((a, b) => b.reactionCount - a.reactionCount);

  const handleLoad = async (options, nextUri) => {
    try {
      setIsLoading(true);
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
    handleLoad({ sort: 'like', limit: 8, offset: 0 });
  }, []);

  return (
    <div className="PopularPapers">
      <h1 className="PopularPapers--title">인기 롤링 페이퍼 🔥</h1>
      <div className="PopularPapers--papers">
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
            1100: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {popularRecipients.map((popularRecipient) => {
            return (
              <SwiperSlide key={popularRecipient.id}>
                <Link to={`/post/${popularRecipient.id}`}>
                  <RollingPaper recipient={popularRecipient} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
