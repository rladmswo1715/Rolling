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
  const popularRecipients = recipients.slice();

  // 이모지 많은 순으로 정렬
  popularRecipients.sort((a, b) => b.reactionCount - a.reactionCount);

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
