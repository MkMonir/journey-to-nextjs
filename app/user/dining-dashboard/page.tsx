import ReservedCard from "./component/ReservedCard";

const page = () => {
  return (
    <div className="bg-white rounded p-5 w-[70%] space-y-6">
      <div>
        <h4 className="text-2xl font-medium">Upcoming reservations</h4>
      </div>

      <ReservedCard />
    </div>
  );
};

export default page;
