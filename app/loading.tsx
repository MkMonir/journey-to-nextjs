import Header from "./components/Header";

const loading = () => {
  return (
    <main>
      <Header />
      <div className="py-3 container mx-auto mt-10 flex flex-wrap justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num, i) => (
          <div
            className="animate-pilse bg-slate-200 w-64 h-72 rounded-md overflow-hidden m-2"
            key={i}
          ></div>
        ))}
      </div>
    </main>
  );
};

export default loading;
