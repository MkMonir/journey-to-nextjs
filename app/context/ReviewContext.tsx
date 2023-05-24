'use client';

import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

interface Review {
  id: number;
  first_name: string;
  last_name: string;
  text: string;
  rating: number;
  restaurant_id: number;
  user_id: number;
}

interface ReviewDetails {
  rating: number;
  reviewtext: string;
  first_name: string;
  last_name: string;
  restaurant_id: number;
  user_id: number;
  restaurantSlug: string;
}

interface ReviewContext {
  reviews: Review[];
  fetchReviews: (restaurant_id: number) => void;
  createReview: ({
    rating,
    reviewtext,
    first_name,
    last_name,
    restaurant_id,
    user_id,
    restaurantSlug,
  }: ReviewDetails) => void;
  isLoading: boolean;
}

export const ReviewContext = createContext<ReviewContext>({
  reviews: [],
  fetchReviews: (restaurant_id: number) => {},
  createReview: () => {},
  isLoading: false,
});

export const ReviewContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchReviews = async (restaurant_id: number) => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `http://localhost:3000/api/reviews/getReviews?restaurant_id=${restaurant_id}`
      );
      setIsLoading(false);
      return setReviews(res.data.data);
    } catch (err: any) {
      setIsLoading(false);
      return console.log(err);
    }
  };

  const createReview = async ({
    rating,
    reviewtext,
    first_name,
    last_name,
    restaurant_id,
    user_id,
    restaurantSlug,
  }: ReviewDetails) => {
    setIsLoading(true);
    try {
      const review = await axios.post(
        `http://localhost:3000/api/restaurant/${restaurantSlug}/review`,
        {
          rating,
          text: reviewtext,
          first_name,
          last_name,
          restaurant_id,
          user_id,
        }
      );

      setReviews([...reviews, review.data.data]);
      setIsLoading(false);
      return review.data;
    } catch (err: any) {
      setIsLoading(false);
      console.log(err);
    }
  };

  const valuItems = {
    reviews,
    fetchReviews,
    createReview,
    setIsLoading,
    isLoading,
  };

  return (
    <ReviewContext.Provider value={valuItems}>
      {children}
    </ReviewContext.Provider>
  );
};
