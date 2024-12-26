import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import ReviewsModal from '../ReviewsModal/ReviewsModal';
import s from './ReviewsCardList.module.scss';

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
              <div className={s.imgWrapper}>
                <img src={image} alt="photo" />
              </div>
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
