import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useReservation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const createReservation = async ({
    slug,
    partySize,
    day,
    time,
    booker_first_name,
    booker_last_name,
    booker_phone,
    booker_email,
    booker_occasion,
    booker_request,
  }: {
    slug: string;
    partySize: string;
    day: string;
    time: string;
    booker_first_name: string;
    booker_last_name: string;
    booker_phone: string;
    booker_email: string;
    booker_occasion: string;
    booker_request: string;
  }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:3000/api/restaurant/${slug}/reserve?day=${day}&time=${time}&partySize=${partySize}`,
        {
          booker_first_name,
          booker_last_name,
          booker_phone,
          booker_email,
          booker_occasion,
          booker_request,
        }
      );
      setLoading(false);

      if (res.data.status === "success") {
        router.push("/user/dining-dashboard");
      }
      return res.data;
    } catch (err: any) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  return {
    loading,
    error,
    createReservation,
  };
};

export default useReservation;
