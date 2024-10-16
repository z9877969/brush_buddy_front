import { useEffect, useRef, useState } from 'react';
import s from './ReviewsModal.module.scss';
import Modal from 'shared/components/Modal/Modal';

const ReviewsModal = ({ image, onClose }) => {
  const imageRef = useRef(null);
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setMultiplier(2);
      } else if (width >= 375) {
        setMultiplier(1.18);
      } else {
        setMultiplier(1);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleImageLoad = () => {
    const originalWidth = imageRef.current.clientWidth;
    const newWidth = originalWidth * multiplier;

    imageRef.current.style.width = newWidth + 'px';
  };

  return (
    <Modal onClose={onClose}>
      <div className={s.modalContent}>
        <img
          ref={imageRef}
          src={image}
          alt="Збільшене зображення"
          className={s.modalImage}
          onLoad={handleImageLoad}
        />
      </div>
    </Modal>
  );
};

export default ReviewsModal;
