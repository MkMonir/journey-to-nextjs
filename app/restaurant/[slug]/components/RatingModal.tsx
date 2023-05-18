"use client";

import Alert from "@/app/components/Alert";
import { Spinner } from "@/app/components/Loading";
import { AuthContext } from "@/app/context/AuthContext";
import { ReviewContext } from "@/app/context/ReviewContext";
import { Booking, Review } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";

const RatingModal = ({
  restaurantId,
  restaurantSlug,
  bookings,
}: {
  restaurantId: number;
  restaurantSlug: string;
  bookings: Booking[];
}) => {
  const { data } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewtext, setReviewText] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);
  const { createReview, reviews, isLoading } = useContext(ReviewContext);

  const handleClose = () => {
    setModalOpen(false);
    setRating(0);

    setReviewText("");
  };

  useEffect(() => {
    const handler = (e: any) => {
      if (!modalRef.current) {
        return;
      }

      if (!modalRef.current.contains(e.target)) {
        setModalOpen(false);
        setRating(0);
        setReviewText("");
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  useEffect(() => {
    if (rating !== 0 && reviewtext !== "") {
      return setDisabled(false);
    }

    return setDisabled(true);
  }, [reviewtext, rating]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createReview({
      rating,
      reviewtext,
      first_name: data?.first_name || "",
      last_name: data?.last_name || "",
      restaurant_id: restaurantId,
      user_id: data?.id || 0,
      restaurantSlug,
    });
  };

  return (
    <>
      {data &&
      bookings.length &&
      bookings.map((booking) => booking.id === restaurantId).length &&
      !reviews.find((review) => review.user_id === data?.id) ? (
        <div>
          {/* Create Review Button Start*/}
          <button
            className="bg-teal-500 px-5 py-3 rounded-md text-lg text-teal-50"
            onClick={() => setModalOpen(true)}
          >
            Create a review
          </button>
          {/* Create Review Button End*/}

          <div>
            <div
              className={`w-full h-full fixed inset-0 bg-gray-700 bg-opacity-50 place-items-center z-50 ${
                modalOpen ? "grid" : "hidden"
              }`}
            >
              <div
                className="bg-gray-50 rounded-sm w-1/3 px-5 py-10 relative"
                ref={modalRef}
              >
                {/* Close Button Start */}
                <button
                  className="bg-teal-400 w-10 h-10 rounded-md grid place-items-center absolute top-2 right-2 active:scale-95 transition-all duration-200 ease-in-out"
                  onClick={handleClose}
                >
                  <Image src="/icons/close.png" alt="" width={20} height={20} />
                </button>
                {/* Close Button End */}

                <h2 className="text-4xl mb-6 text-center font-medium">
                  How did we do?
                </h2>

                <>{error && <Alert text={error} />}</>

                {/* Review Modal Form Start */}
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="flex justify-center">
                    {[...Array(5)].map((star, i) => (
                      <label key={i}>
                        <input
                          type="radio"
                          id="star"
                          className="hidden"
                          onClick={() => setRating(i + 1)}
                          value={rating}
                        />
                        <i
                          className={`${
                            i + 1 <= (rating || hover)
                              ? "text-red-600"
                              : "text-gray-300"
                          } transition-all duration-300 ease-in-out cursor-pointer text-4xl fa-solid fa-star`}
                          onMouseEnter={() => setHover(i + 1)}
                          onMouseLeave={() => setHover(0)}
                        ></i>
                      </label>
                    ))}
                  </div>
                  <textarea
                    id=""
                    placeholder="Descrive your experience"
                    className="w-full bg-gray-100 rounded-md p-3 h-28 max-h-96 min-h-6 resize-none border-primary"
                    onChange={(e) => setReviewText(e.target.value)}
                    value={reviewtext}
                  />
                  <button
                    type="submit"
                    className="w-full px-5 py-3 bg-teal-500 rounded-md text-teal-50 text-lg active:scale-95 transition-all duration-200 ease-in-out disabled:bg-gray-300 disabled:active:scale-100"
                    disabled={disabled}
                  >
                    {isLoading ? <Spinner /> : "Submit a Review"}
                  </button>
                </form>
                {/* Review Modal Form End */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default RatingModal;
