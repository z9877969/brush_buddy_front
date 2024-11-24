import Modal from 'shared/components/Modal/Modal';
import ReviewsModalSwiper from '../ReviewsModalSwiper/ReviewsModalSwiper';

const ReviewsModal = ({ onClose, reviewsList, image }) => {
  return (
    <Modal onClose={onClose}>
      <ReviewsModalSwiper reviewsCardData={reviewsList} slideIdx={image.idx} />
    </Modal>
  );
};

export default ReviewsModal;
