const Form = () => {
  return (
    <div className="mt-10 flex gap-5 flex-wrap justify-between w-[660px]">
      {/* FORM */}
      <input
        type="text"
        placeholder="First Name"
        className="border-primary w-80 p-3 rounded-sm"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="border-primary w-80 p-3 rounded-sm"
      />
      <input
        type="text"
        placeholder="Phone Number"
        className="border-primary w-80 p-3 rounded-sm"
      />
      <input
        type="text"
        placeholder="Email Address"
        className="border-primary w-80 p-3 rounded-sm"
      />
      <input
        type="text"
        placeholder="Occasion (Optional)"
        className="border-primary w-80 p-3 rounded-sm"
      />
      <input
        type="text"
        placeholder="Requests"
        className="border-primary w-80 p-3 rounded-sm"
      />

      <button className="bg-red-600 w-full p-3 text-white font-medium rounded disabled:bg-gray-300 active:scale-[0.95] transition-all duration-300">
        Complete Reservation
      </button>
      {/* FORM */}
    </div>
  );
};

export default Form;
