const loading = () => {
  return (
    <main>
      <div>
        <div className="border-primary bg-white h-20 grid place-items-center">
          <div className=" bg-slate-200 animate-pulse h-6 m-auto w-2/3"></div>
        </div>
        <div className="bg-gray-200">
          <div className="m-auto w-2/3 py-8 px-16 flex gap-5">
            <div className="p-8 w-[25%] flex flex-col gap-4">
              {[1, 2, 3].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-5 bg-white animate-pulse"
                ></div>
              ))}
            </div>
            <div className="bg-white rounded p-6 w-[70%] flex flex-col gap-8">
              <>
                <div className="w-32 bg-slate-200 animate-pulse h-6 mb-6"></div>
                {[1, 2, 3, 4, 5].map((item, i) => (
                  <div
                    key={i}
                    className="w-full h-12 rounded-md bg-slate-200 animate-pulse"
                  ></div>
                ))}
                <div className="w-full h-20 rounded-md bg-slate-200 animate-pulse mt-5"></div>
              </>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default loading;
