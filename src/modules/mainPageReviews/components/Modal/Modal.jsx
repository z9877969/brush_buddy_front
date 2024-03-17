import { useEffect, useRef, useState } from 'react';
import s from './Modal.module.scss';

const Modal = ({ image, onClose }) => {
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
    <div className={s.modalOverlay} onClick={onClose}>
      <div className={s.modalContent}>
        <img
          ref={imageRef}
          src={image}
          alt="Збільшене зображення"
          className={s.modalImg}
          onLoad={handleImageLoad}
        />
      </div>
    </div>
  );
};

export default Modal;
