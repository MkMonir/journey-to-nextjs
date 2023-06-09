"use client";

import { useContext, useEffect, useRef, useState } from "react";
import Input from "./Input";
import useAuth from "@/hooks/useAuth";
import { AuthContext } from "../context/AuthContext";
import Loading from "./Loading";
import Alert from "./Alert";

const Modal = ({ isSignin }: { isSignin: boolean }) => {
  const { signIn, signUp } = useAuth();
  const modalRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    city: "",
    phone: "",
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(true);
  const { error, loading, setAuthState } = useContext(AuthContext);

  useEffect(() => {
    if (isSignin) {
      if (formData.email && formData.password) {
        return setDisabled(false);
      }
    } else {
      if (
        formData.email &&
        formData.password &&
        formData.first_name &&
        formData.last_name &&
        formData.city &&
        formData.phone
      ) {
        return setDisabled(false);
      }
    }

    setDisabled(true);
  }, [formData, isSignin]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (e: any) => {
    if (!modalRef.current) return;

    if (!modalRef.current.contains(e.target)) {
      setOpen(false);
      setFormData({
        first_name: "",
        last_name: "",
        city: "",
        phone: "",
        email: "",
        password: "",
      });
      setAuthState({ loading: false, error: null, data: null });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    if (open) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "scroll";
  }, [open]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (isSignin) {
      signIn({ email: formData.email, password: formData.password });
    } else {
      signUp(formData);
    }
  };

  return (
    <div>
      {/* <!--=============================================== Modal toggle ================================================--> */}
      <button
        className={`active:scale-95 transition-all duration-200 px-4 py-1.5 rounded ${
          isSignin ? "border-primary" : "bg-teal-400 text-teal-50"
        } `}
        type="button"
        onClick={handleOpen}
      >
        {isSignin ? "Signin" : "Signup"}
      </button>
      {/* <!--=============================================== Modal toggle END ================================================--> */}

      {/* <!--=================================================== Main modal================================================= --> */}
      <div
        className={`fixed inset-0 z-50 w-full p-4 overflow-hidden h-full transition-all duration-200 ease-in-out  ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } grid place-items-center bg-gray-800 bg-opacity-40`}
        onClick={handleClose}
      >
        <div className="relative w-full max-w-lg max-h-full">
          {/* <!--=========================================== Modal content =================================================== --> */}
          <div
            className={`relative bg-white rounded-lg shadow transition-all duration-200 ease-in-out ${
              open
                ? "scale-100 opacity-100 visible"
                : "scale-0 opacity-0 invisible"
            }`}
            ref={modalRef}
          >
            {/* =========================================== Modal Close BTN ===================================*/}
            <button
              type="button"
              className="absolute top-1.5 right-1.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={() => {
                setOpen(false);
                setFormData({
                  first_name: "",
                  last_name: "",
                  city: "",
                  phone: "",
                  email: "",
                  password: "",
                });
                setAuthState({ loading: false, error: null, data: null });
              }}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            {/* =========================================== Modal Close BTN END ===================================*/}

            <div className="px-6 py-6 lg:px-8">
              <h3 className="my-4 text-2xl font-medium text-gray-900 text-center">
                {isSignin
                  ? "Sign in to our platform"
                  : "Create your AddaKhana account"}
              </h3>
              {error && <Alert text={error} />}

              {/* =========================================== Modal FORM START ===================================*/}
              <form className="space-y-6 mt-5" onSubmit={handleSubmit}>
                {!isSignin && (
                  <>
                    <div className="flex md:flex-row flex-col gap-6">
                      <Input
                        type="text"
                        id="first_name"
                        placeholder="jhon"
                        label="Your first name"
                        handleChange={handleChange}
                        value={formData.first_name}
                      />
                      <Input
                        type="text"
                        id="last_name"
                        placeholder="Doe"
                        label="Your last name"
                        handleChange={handleChange}
                        value={formData.last_name}
                      />
                    </div>
                    <div className="flex md:flex-row flex-col gap-6">
                      <Input
                        type="text"
                        id="city"
                        placeholder="New York"
                        label="Your City"
                        handleChange={handleChange}
                        value={formData.city}
                      />
                      <Input
                        type="text"
                        id="phone"
                        placeholder="+8723382414"
                        label="Your phone number"
                        handleChange={handleChange}
                        value={formData.phone}
                      />
                    </div>
                  </>
                )}
                <Input
                  type="text"
                  id="email"
                  placeholder="jhon@gmail.com"
                  label="Your Email Address"
                  handleChange={handleChange}
                  value={formData.email}
                />

                <Input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  label="Your Password"
                  handleChange={handleChange}
                  value={formData.password}
                />

                {loading ? (
                  <Loading />
                ) : (
                  <button
                    type="submit"
                    className="w-full text-white bg-teal-700 hover:bg-teal-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-gray-400"
                    disabled={disabled}
                  >
                    {isSignin
                      ? "Login to your account"
                      : "Create a new account"}
                  </button>
                )}
              </form>
              {/* =========================================== Modal FORM END ===================================*/}
            </div>
          </div>
          {/* <!--=========================================== Modal content END =================================================== --> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
