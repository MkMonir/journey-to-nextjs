"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const PaymentModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initalPaymentData = {
    name: "",
    cardNo: "",
    date: "",
    cvcNo: "",
  };
  const [paymentData, setPaymentData] = useState(initalPaymentData);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const handler = (e: any) => {
      if (!modalRef.current) {
        return;
      }

      if (!modalRef.current.contains(e.target)) {
        setModalOpen(false);
        setPaymentData(initalPaymentData);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [initalPaymentData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentData({ ...paymentData, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    if (
      paymentData.name &&
      paymentData.cardNo &&
      paymentData.cvcNo &&
      paymentData.date
    ) {
      return setIsDisabled(false);
    }

    return setIsDisabled(true);
  }, [paymentData]);

  return (
    <div>
      <button
        className="px-5 py-3 bg-teal-500 rounded-md font-medium text-lg text-teal-50 active:scale-95 transition-all duration-300 ease-in-out"
        onClick={() => setModalOpen(true)}
      >
        Add Payment Method
      </button>

      <div
        className={`w-full h-full fixed inset-0 bg-gray-700 bg-opacity-30 place-items-center px-8 ${
          modalOpen ? "grid" : "hidden"
        }`}
      >
        <div
          className="w-[50%] bg-white rounded-md p-8 text-left space-y-4 relative"
          ref={modalRef}
        >
          <h2 className="text-4xl font-medium">Add Payment Method</h2>
          <p>
            Your full card number will not be shared with restaurants, and your
            card will only be charged when you opt to pay using AddaKhana.
          </p>

          <div className="md:w-[50%] w-full h-64 md:mx-auto rounded-xl p-5 flex flex-col justify-between bg-[url('/images/credit_card_bg.jpeg')] bg-cover bg-center relative shadow-sm my-6 select-none">
            <div className="absolute w-full h-full inset-0 bg-black bg-opacity-40 rounded-xl"></div>
            <div className="flex justify-between z-20">
              <Image
                src="/images/chip.png"
                alt=""
                width={50}
                height={50}
                className="w-16 object-cover"
              />
              <Image
                src="/images/visa.png"
                alt=""
                width={50}
                height={50}
                className="w-24 object-cover"
              />
            </div>

            <h2 className="text-gray-50 text-2xl z-20">{paymentData.cardNo}</h2>

            <div className="flex justify-between text-gray-50 z-20">
              <div>
                <h4 className="text-gray-300">Card Holder</h4>
                <p className="text-xl text-gray-50">
                  {paymentData.name ? paymentData.name : "Name"}
                </p>
              </div>

              <div>
                <h4 className="text-gray-300">CVC</h4>
                <p className="text-xl text-gray-50">
                  {paymentData.cvcNo ? paymentData.cvcNo : "1111"}
                </p>
              </div>

              <div>
                <h4 className="text-gray-300">Expires</h4>
                <p className="text-xl text-gray-50">
                  {paymentData.date ? paymentData.date : "MM / YY"}
                </p>
              </div>
            </div>
          </div>

          <form className="flex gap-5 flex-wrap w-full">
            <input
              type="text"
              className="w-[48%] p-3 rounded-md border-primary focus:ring-black focus:ring-1"
              placeholder="Name on card"
              id="name"
              onChange={handleChange}
              value={paymentData.name}
            />
            <input
              type="number"
              className="w-[48%] p-3 rounded-md border-primary focus:ring-black focus:ring-1"
              placeholder="1234 1234 1234 1234"
              id="cardNo"
              onChange={handleChange}
              value={paymentData.cardNo}
            />
            <div className="flex gap-5 w-full flex-wrap">
              <input
                type="month"
                className="w-[48%] p-3 rounded-md border-primary focus:ring-black focus:ring-1"
                placeholder="MM / YY"
                id="date"
                onChange={handleChange}
                value={paymentData.date}
              />
              <input
                type="number"
                className="w-[48%] p-3 rounded-md border-primary focus:ring-black focus:ring-1"
                placeholder="CVC"
                id="cvcNo"
                onChange={handleChange}
                value={paymentData.cvcNo}
              />
            </div>
            <div className="w-full flex justify-end gap-8 mt-8">
              <button
                className="text-lg text-red-500"
                onClick={() => {
                  setModalOpen(false);
                  setPaymentData(initalPaymentData);
                }}
              >
                Cancel
              </button>
              <button
                className="px-5 py-3 bg-teal-500 rounded-md font-medium text-lg text-teal-50 active:scale-95 transition-all duration-300 ease-in-out disabled:bg-gray-300 disabled:active:scale-100"
                disabled={isDisabled}
              >
                Add payment method
              </button>
            </div>
          </form>
          <button
            className="w-8 h-8 bg-gray-800 grid place-items-center rounded-lg absolute top-2 right-5"
            onClick={() => {
              setModalOpen(false);
              setPaymentData(initalPaymentData);
            }}
          >
            <Image src="/icons/close.png" alt="" width={16} height={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
