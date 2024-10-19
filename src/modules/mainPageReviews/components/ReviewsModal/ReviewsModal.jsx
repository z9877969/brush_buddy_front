// import { useEffect, useRef, useState } from 'react';
// import s from './ReviewsModal.module.scss';
import Modal from 'shared/components/Modal/Modal';
import ReviewsModalSwiper from '../ReviewsModalSwiper/ReviewsModalSwiper';

const ReviewsModal = ({ onClose, reviewsList }) => {
  // const imageRef = useRef(null);
  // const [multiplier, setMultiplier] = useState(1);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const width = window.innerWidth;
  //     if (width >= 768) {
  //       setMultiplier(2);
  //     } else if (width >= 375) {
  //       setMultiplier(1.18);
  //     } else {
  //       setMultiplier(1);
  //     }
  //   };

  //   handleResize();

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // const handleImageLoad = () => {
  //   const originalWidth = imageRef.current.clientWidth;
  //   const newWidth = originalWidth * multiplier;

  //   imageRef.current.style.width = newWidth + 'px';
  // };

  return (
    <Modal onClose={onClose}>
      <ReviewsModalSwiper reviewsCardData={reviewsList} />
    </Modal>
  );
};

export default ReviewsModal;
