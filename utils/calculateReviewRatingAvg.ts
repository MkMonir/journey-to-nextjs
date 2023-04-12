import { Review } from "@prisma/client";

const calculateReviewRatingAvg = (reviews: Review[]) => {
  if (!reviews.length) return 0;

  return (
    reviews.reduce((acc, review) => {
      return acc + review.rating;
    }, 0) / reviews.length
  );
};

export default calculateReviewRatingAvg;
