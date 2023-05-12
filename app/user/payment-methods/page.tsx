import Image from "next/image";
import PaymentModal from "./component/PaymentModal";

const page = () => {
  return (
    <div className="w-[70%] p-5 bg-white rounded-md">
      <div>
        <h2 className="text-3xl font-medium mb-6">Payment Mehods</h2>

        <div className="grid place-items-center text-center w-[65%] mx-auto py-5 space-y-8">
          <Image
            src="/images/empty_state_pay.svg"
            alt=""
            width={100}
            height={100}
          />

          <div className="space-y-5">
            <h4 className="text-xl font-medium">
              No payment methods added more.
            </h4>
            <p>
              Add cards to your account for faster checkouts with reservation
              holds, takeout, experiences, and much
            </p>

            <PaymentModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
