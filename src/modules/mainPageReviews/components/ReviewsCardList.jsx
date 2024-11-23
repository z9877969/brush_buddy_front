import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import s from './MainPageReviews/MainPageReviews.module.scss';
import { Navigation } from 'swiper/modules';
import ReviewsModal from './ReviewsModal/ReviewsModal';

const ReviewsCardList = ({
  reviewsCardData,
  swiperData,
  reachEndButton,
  reachStartButton,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (image) => {
    document.body.style.overflow = 'hidden';
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    document.body.style.overflow = '';
    setSelectedImage(null);
  };

  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          swiperData(swiper);
        }}
        onSlideChange={(swiper) => {
          const isEnd = swiper.isEnd;
          const isBeginning = swiper.isBeginning;

          if (isEnd) {
            reachEndButton(true);
          } else if (isBeginning) {
            reachStartButton(true);
          } else {
            reachEndButton(false);
            reachStartButton(false);
          }
        }}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        modules={[Navigation]}
      >
        {reviewsCardData.map(({ id, image }, idx) => (
          <SwiperSlide key={id}>
            <div
              className={s.imageDiv}
              onClick={() => handleOpenModal({ url: image, idx })}
            >
              <img src={image} alt="photo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedImage && (
        <ReviewsModal
          image={selectedImage}
          onClose={handleCloseModal}
          reviewsList={reviewsCardData}
        />
      )}
    </>
  );
};

export default ReviewsCardList;
