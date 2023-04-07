const Header = () => {
  return (
    <div>
      {/* HEADER */}
      <h3 className="font-bold">You are alomost done</h3>

      <div className="mt-5 flex">
        <img
          src="https://resizer.otstatic.com/v2/photos/legacy/2/42341018.png"
          alt=""
          className="w-32 h-18 rounded-sm"
        />

        <div className="ml-4">
          <h1 className="text-3xl font-bold">Aroyee</h1>

          <div className="flex mt-3">
            <p className="mr-6">Tues, 22, 2023</p>
            <p className="mr-6">7:30 PM</p>
            <p className="mr-6">3 People</p>
          </div>
        </div>
      </div>
      {/* HEADER */}
    </div>
  );
};

export default Header;
