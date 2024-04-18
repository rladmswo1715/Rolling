import RollingPaper from './RollingPaper';
import './recentPapers.scss';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiperStyles.scss';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function RecentPapers({ recipients }) {
  if (!recipients) return null;
  const [swiperRef, setSwiperRef] = useState(null);

  const recentRecipients = recipients.slice();

  return (
    <div className="RecentPapers">
      <h1 className="RecentPapers--title">최근에 만든 롤링 페이퍼 ⭐️</h1>
      <div className="RecentPapers--papers">
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
        >
          {recentRecipients.map((recentRecipient) => {
            return (
              <SwiperSlide key={recentRecipient.id}>
                <Link to={`/post/${recentRecipient.id}`}>
                  <RollingPaper recipient={recentRecipient} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
