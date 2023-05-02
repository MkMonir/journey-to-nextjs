import calculateReviewRatingAvg from "./../../utils/calculateReviewRatingAvg";
import { Review } from "@prisma/client";
import Stars from "./Stars";

const Ratting = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="flex items-center py-2">
      <Stars reviews={reviews} />
      <p className="ml-2 text-sm font-bold text-gray-900">
        {calculateReviewRatingAvg(reviews) === 0
          ? 0
          : calculateReviewRatingAvg(reviews).toFixed(1)}
      </p>
      <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
      <div className="text-sm font-medium text-gray-900 ">
        {reviews.length} review
        {reviews.length === 1 ? "" : "s"}
      </div>
    </div>
  );
};

export default Ratting;
