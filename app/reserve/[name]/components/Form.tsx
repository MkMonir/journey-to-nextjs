"use client";

import { Spinner } from "@/app/components/Loading";
import useReservation from "@/hooks/useReservation";
import { useEffect, useState } from "react";

const Form = ({
  partySize,
  date,
  slug,
}: {
  partySize: string;
  date: string;
  slug: string;
}) => {
  const [bookerdata, setBookerdata] = useState({
    booker_first_name: "",
    booker_last_name: "",
    booker_phone: "",
    booker_email: "",
    booker_occasion: "",
    booker_request: "",
  });
  const [disabled, setDisabled] = useState(true);
  const { createReservation, loading, error } = useReservation();

  const [day, time] = date?.split("T");

  useEffect(() => {
    if (
      bookerdata.booker_first_name &&
      bookerdata.booker_last_name &&
      bookerdata.booker_email &&
      bookerdata.booker_phone
    ) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [bookerdata]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookerdata({ ...bookerdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const booking = await createReservation({
      slug,
      day,
      time,
      partySize,
      booker_first_name: bookerdata.booker_first_name,
      booker_last_name: bookerdata.booker_last_name,
      booker_email: bookerdata.booker_email,
      booker_phone: bookerdata.booker_phone,
      booker_occasion: bookerdata.booker_occasion,
      booker_request: bookerdata.booker_request,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex gap-5 flex-wrap justify-between w-[660px]"
    >
      {error}
      {/* FORM */}
      <input
        type="text"
        placeholder="First Name"
        id="booker_first_name"
        className="border-primary w-80 p-3 rounded-sm"
        onChange={handleChange}
        value={bookerdata.booker_first_name}
      />
      <input
        type="text"
        placeholder="Last Name"
        id="booker_last_name"
        className="border-primary w-80 p-3 rounded-sm"
        onChange={handleChange}
        value={bookerdata.booker_last_name}
      />
      <input
        type="text"
        placeholder="Phone Number"
        id="booker_phone"
        className="border-primary w-80 p-3 rounded-sm"
        onChange={handleChange}
        value={bookerdata.booker_phone}
      />
      <input
        type="text"
        placeholder="Email Address"
        id="booker_email"
        className="border-primary w-80 p-3 rounded-sm"
        onChange={handleChange}
        value={bookerdata.booker_email}
      />
      <input
        type="text"
        placeholder="Occasion (Optional)"
        id="booker_occasion"
        className="border-primary w-80 p-3 rounded-sm"
        onChange={handleChange}
        value={bookerdata.booker_occasion}
      />
      <input
        type="text"
        placeholder="Requests"
        id="booker_request"
        className="border-primary w-80 p-3 rounded-sm"
        onChange={handleChange}
        value={bookerdata.booker_request}
      />

      <button
        type="submit"
        className="bg-teal-600 w-full p-3 text-white font-medium rounded disabled:bg-gray-300 active:scale-[0.95] transition-all duration-300"
        disabled={disabled || loading}
      >
        {loading ? <Spinner /> : "Complete Reservation"}
      </button>
      {/* FORM */}
      <p className="text-xs text-gray-600">
        By clicking “Complete reservation” you agree to the{" "}
        <span className="text-red-500 hover:underline cursor-pointer">
          OpenTable Terms of Use
        </span>{" "}
        and{" "}
        <span className="text-red-500 hover:underline cursor-pointer">
          Privacy Policy.
        </span>
        Standard text message rates may apply. You may opt out of receiving text
        messages at any time.
      </p>
    </form>
  );
};

export default Form;
