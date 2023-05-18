"use client";

import Stars from "@/app/components/Stars";
import { useContext, useEffect } from "react";
import { ReviewContext } from "@/app/context/ReviewContext";
import { Spinner } from "@/app/components/Loading";

const ReviewCard = ({
  restaurantName,
  restaurant_id,
}: {
  restaurantName: string;
  restaurant_id: number;
}) => {
  const { reviews, fetchReviews, isLoading } = useContext(ReviewContext);

  useEffect(() => {
    fetchReviews(restaurant_id);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="py-10 grid place-items-center">
          <Spinner />
        </div>
      ) : (
        <>
          {reviews.length ? (
            reviews?.map((review, i) => (
              <div
                className="border-b border-solid border-0 border-gray-300 pb-7 mb-7"
                key={i}
              >
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
            ))
          ) : (
            <p>
              At present, {restaurantName} has no reviews. Please add a review
              after your dining experience to help others make a decision about
              where to eat.
            </p>
          )}
        </>
      )}
    </>
  );
};

export default ReviewCard;
