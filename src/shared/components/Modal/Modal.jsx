import { createPortal } from 'react-dom';
import s from './Modal.module.scss';
import { useCallback, useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  const closeModal = useCallback(
    (e) => {
      if (e.code === 'Escape' || e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', closeModal);
      document.body.removeAttribute('style');
    };
  }, [closeModal]);

  return createPortal(
    <div className={s.modalOverlay} onClick={closeModal}>
      {children}
    </div>,
    modalRoot
  );
};

export default Modal;
