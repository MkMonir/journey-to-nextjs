"use client";

import Input from "@/app/components/Input";
import { AuthContext } from "@/app/context/AuthContext";
import { useContext, useEffect, useState } from "react";

const Form = () => {
  const { data } = useContext(AuthContext);

  const [updateUserData, setUpdateUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    city: "",
  });

  useEffect(() => {
    setUpdateUserData({ ...updateUserData, ...data });
  }, [data]);

  const handleChange = (e: any) => {
    setUpdateUserData({ ...updateUserData, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <h4 className="text-3xl font-medium mb-6">About Me</h4>

      <form className="space-y-8">
        <Input
          type="text"
          placeholder="first name"
          id="first_name"
          label="First name"
          handleChange={handleChange}
          value={updateUserData?.first_name}
        />
        <Input
          type="text"
          placeholder="last name"
          id="last_name"
          label="Last name"
          handleChange={handleChange}
          value={updateUserData?.last_name}
        />
        <Input
          type="text"
          placeholder="email"
          id="email"
          label="Email"
          handleChange={handleChange}
          value={updateUserData?.email}
        />
        <Input
          type="text"
          placeholder="Phone Number"
          id="phone"
          label="Phone Number"
          handleChange={handleChange}
          value={updateUserData?.phone}
        />
        <Input
          type="text"
          placeholder="City"
          id="city"
          label="City"
          handleChange={handleChange}
          value={updateUserData?.city}
        />

        <button className="w-full text-center block bg-teal-500 py-3.5 text-teal-50 rounded-md text-lg active:scale-95 transition-all duration-200">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Form;
