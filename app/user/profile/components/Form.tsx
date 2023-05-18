"use client";

import Alert from "@/app/components/Alert";
import Input from "@/app/components/Input";
import { Spinner } from "@/app/components/Loading";
import { AuthContext } from "@/app/context/AuthContext";
import useAuth from "@/hooks/useAuth";
import { useContext, useEffect, useState } from "react";

const Form = () => {
  const { data, loading } = useContext(AuthContext);
  const { updateUser } = useAuth();

  const [updateUserData, setUpdateUserData] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    city: "",
  });
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (!loading) {
      setUpdateUserData({ ...updateUserData, ...data });
    }
  }, [data, loading]);

  useEffect(() => {
    function compareObjects(obj1: any, obj2: any) {
      for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      }
      return true;
    }

    if (compareObjects(data, updateUserData)) {
      return setDisabled(true);
    }

    return setDisabled(false);
  }, [data]);

  const handleChange = (e: any) => {
    setUpdateUserData({ ...updateUserData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    updateUser(updateUserData);
  };

  return (
    <div>
      <h4 className="text-3xl font-medium mb-6">About Me</h4>

      {loading ? (
        <Spinner />
      ) : (
        <>
          {data ? (
            <form className="space-y-8" onSubmit={handleSubmit}>
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

              <button
                type="submit"
                className="w-full text-center block bg-teal-500 py-3.5 text-teal-50 rounded-md text-lg active:scale-95 transition-all duration-200 disabled:bg-gray-300"
                disabled={disabled}
              >
                {loading ? <Spinner /> : "Save Changes"}
              </button>
            </form>
          ) : (
            <Alert text={"Unauthorized request, Login Please!"} />
          )}
        </>
      )}
    </div>
  );
};

export default Form;
