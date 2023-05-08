const loading = () => {
  return (
    <div className="border-0 border-t border-solid border-gray-300 h-screen">
      <div className="py-9 m-auto w-3/5  flex flex-col gap-8">
        <div className="w-[55%] h-48 bg-slate-200 animate-pulse"></div>
        <div className="flex flex-wrap gap-5">
          <div className="w-[45%] h-20 bg-slate-200 animate-pulse"></div>
          <div className="w-[45%] h-20 bg-slate-200 animate-pulse"></div>
          <div className="w-[45%] h-20 bg-slate-200 animate-pulse"></div>
          <div className="w-[45%] h-20 bg-slate-200 animate-pulse"></div>
          <div className="w-[45%] h-20 bg-slate-200 animate-pulse"></div>
          <div className="w-[45%] h-20 bg-slate-200 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
