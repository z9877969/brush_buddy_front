import * as reviewsDict from '../images';

export const reviewsCardData = Object.values(reviewsDict).map(
  (review, idx) => ({
    id: idx + 1,
    image: review,
  })
);
