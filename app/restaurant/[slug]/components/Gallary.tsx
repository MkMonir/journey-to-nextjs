const Gallary = () => {
  return (
    <section id="photos">
      {/* GALLARY */}
      <h1 className="font-medium text-3xl mt-10 mb-7 border-b border-solid border-0 border-gray-300 pb-5">
        6 photos
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://resizer.otstatic.com/v2/photos/xlarge/3/42779475.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://resizer.otstatic.com/v2/photos/xlarge/3/42779484.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://resizer.otstatic.com/v2/photos/xlarge/1/42341022.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://resizer.otstatic.com/v2/photos/xlarge/2/42341020.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://resizer.otstatic.com/v2/photos/xlarge/3/42779444.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://resizer.otstatic.com/v2/photos/xlarge/2/42779458.jpg"
            alt=""
          />
        </div>
      </div>
      {/* GALLARY */}
    </section>
  );
};

export default Gallary;
