import Header from "./components/Header";

const loading = () => {
  return (
    <div>
      <Header />
      <div className="flex gap-5 py-4 m-auto w-2/3 justify-between items-start min-h-[85vh]">
        <div className="w-1/5 space-y-10">
          <div>
            <div className="h-2.5 bg-slate-200 rounded-full w-48 mb-4"></div>
            <div className="h-2 bg-slate-200 rounded-full w-48 mb-2.5"></div>
            <div className="h-2 bg-slate-200 rounded-full w-48 mb-2.5"></div>

            <span className="sr-only">Loading...</span>
          </div>

          <div>
            <div className="h-2.5 bg-slate-200 rounded-full w-48 mb-4"></div>
            <div className="h-2 bg-slate-200 rounded-full w-48 mb-2.5"></div>
            <div className="h-2 bg-slate-200 rounded-full w-48 mb-2.5"></div>

            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div className="w-5/6 space-y-5">
          {[1, 2, 3, 4, 5].map((item, i) => (
            <div
              role="status"
              className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
              key={i}
            >
              <div className="flex items-center justify-center w-full h-32 bg-slate-300 rounded sm:w-64">
                <svg
                  className="w-12 h-12 text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                </svg>
              </div>
              <div className="w-full">
                <div className="h-2.5 bg-slate-200 rounded-full w-48 mb-4"></div>
                <div className="h-2 bg-slate-200 rounded-full w-48 mb-2.5"></div>
                <div className="h-2 bg-slate-200 rounded-full   mb-2.5"></div>

                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default loading;
