import Stars from "@/app/components/Stars";
import calculateReviewRatingAvg from "@/utils/calculateReviewRatingAvg";
import { Review } from "@prisma/client";

const ReviewCard = ({
  review,
  reviews,
}: {
  review: Review;
  reviews: Review[];
}) => {
  return (
    <div className="border-b border-solid border-0 border-gray-300 pb-7 mb-7">
      {/* REVIEW CARD */}
      <div className="flex gap-5">
        <div className="flex flex-col justify-center items-center">
          <div className="rounded-full bg-teal-400 w-14 h-14 flex items-center justify-center text-white text-xl">
            <h2>
              {review.first_name[0]}
              {review.last_name[0]}
            </h2>
          </div>

          <p className="w-[120px] text-center">
            {review.first_name} {review.last_name}
          </p>
        </div>

        <div>
          <Stars ratting={review.rating} reviews={[]} />
          <p className="mt-4 text-gray-700 ">{review.text}</p>
        </div>
      </div>
      {/* REVIEW CARD */}
    </div>
  );
};

export default ReviewCard;
