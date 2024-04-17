import RollingPaper from './RollingPaper';
import './popularPapers.scss';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.scss';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function PopularPapers({ recipients }) {
  if (!recipients) return null;
  const popularRecipients = recipients;
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="PopularPapers">
      <h1 className="PopularPapers--title">인기 롤링 페이퍼 🔥</h1>
      <div className="PopularPapers--papers">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1.5}
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
            800: {
              slidesPerView: 2.5,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {popularRecipients.map((recepient) => (
            <SwiperSlide key={recepient.id}>
              <Link to={`/post/${recepient.id}`}>
                <RollingPaper recepient={recepient} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
