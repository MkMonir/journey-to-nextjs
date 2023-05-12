"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const PaymentModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (!modalRef.current) {
        return;
      }

      if (!modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div>
      <button
        className="px-5 py-3 bg-teal-500 rounded-md font-medium text-lg text-teal-50 active:scale-95 transition-all duration-300 ease-in-out"
        onClick={() => setModalOpen(true)}
      >
        Add Payment Method
      </button>

      <div
        className={`w-full h-full fixed inset-0 bg-gray-700 bg-opacity-30 place-items-center ${
          modalOpen ? "grid" : "hidden"
        }`}
      >
        <div
          className="w-[900px] max-w-4xl bg-white rounded-md p-8 text-left space-y-4 relative"
          ref={modalRef}
        >
          <h2 className="text-3xl font-medium">Add Payment Method</h2>
          <p>
            Your full card number will not be shared with restaurants, and your
            card will only be charged when you opt to pay using AddaKhana.
          </p>
          <form className="flex gap-5 flex-wrap w-full">
            <input
              type="text"
              className="w-[48%] p-3 rounded-md border-primary focus:ring-black focus:ring-1"
              placeholder="Name on card"
            />
            <input
              type="text"
              className="w-[48%] p-3 rounded-md border-primary focus:ring-black focus:ring-1"
              placeholder="1234 1234 1234 1234"
            />
            <div className="flex gap-5 w-full flex-wrap">
              <input
                type="text"
                className="w-[31.3%] p-3 rounded-md border-primary focus:ring-black focus:ring-1"
                placeholder="MM / YY"
              />
              <input
                type="text"
                className="w-[31.3%] p-3 rounded-md border-primary focus:ring-black focus:ring-1"
                placeholder="CVC"
              />
              <input
                type="text"
                className="w-[31.3%] p-3 rounded-md border-primary focus:ring-black focus:ring-1"
                placeholder="Postal code"
              />
            </div>
            <div className="w-full flex justify-end gap-8 mt-8">
              <button
                className="text-lg text-red-500"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button className="px-5 py-3 bg-teal-500 rounded-md font-medium text-lg text-teal-50 active:scale-95 transition-all duration-300 ease-in-out">
                Add payment method
              </button>
            </div>
          </form>
          <button
            className="w-8 h-8 bg-gray-800 grid place-items-center rounded-lg absolute top-2 right-5"
            onClick={() => setModalOpen(false)}
          >
            <Image src="/icons/close.png" alt="" width={16} height={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
