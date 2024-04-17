import RollingPaper from './RollingPaper';
import './recentPapers.scss';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.scss';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function RecentPapers({ recipients }) {
  if (!recipients) return null;
  const recentRecipients = recipients;
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="RecentPapers">
      <h1 className="RecentPapers--title">최근에 만든 롤링 페이퍼 ⭐️</h1>
      <div className="RecentPapers--papers">
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
        >
          {recentRecipients.map((recepient) => (
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
