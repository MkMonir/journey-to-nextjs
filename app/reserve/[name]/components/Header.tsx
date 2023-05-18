import { Time, convertToDisplayTime } from "@/utils/convertToDisplayTime";
import { format } from "date-fns";
import Image from "next/image";

const Header = ({
  name,
  image,
  date,
  partySize,
}: {
  name: string;
  image: string;
  date: string;
  partySize: string;
}) => {
  const [day, time] = date.split("T");

  return (
    <div>
      {/* HEADER */}
      <h3 className="font-bold">You are alomost done</h3>

      <div className="mt-5 flex">
        <Image
          src={image}
          alt=""
          width={200}
          height={200}
          className="w-32 h-24 rounded-sm"
        />

        <div className="ml-4">
          <h1 className="text-3xl font-bold">{name}</h1>

          <div className="flex mt-3">
            <p className="mr-6">{format(new Date(day), "ccc, LLL d")}</p>
            <p className="mr-6">{convertToDisplayTime(time as Time)}</p>
            <p className="mr-6">
              {partySize} {parseInt(partySize) === 1 ? "People" : "Person"}
            </p>
          </div>
        </div>
      </div>
      {/* HEADER */}
    </div>
  );
};

export default Header;
