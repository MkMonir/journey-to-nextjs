'use client';

import { useEffect, useState } from 'react';

const Form = () => {
  const [bookerdata, setBookerdata] = useState({
    booker_first_name: '',
    booker_last_name: '',
    booker_phone: '',
    booker_email: '',
    booker_occasion: '',
    booker_request: '',
  });
  const [disabled, setDisabled] = useState(true);

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

  return (
    <div className="mt-10 flex gap-5 flex-wrap justify-between w-[660px]">
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
        disabled={disabled}
      >
        Complete Reservation
      </button>
      {/* FORM */}
    </div>
  );
};

export default Form;
