import Image from "next/image";
import done from "./..//../../../public/icons/done.png";
import avatar from "./..//../../../public/icons/avatar.png";
import calender from "./..//../../../public/icons/calender.png";
import Link from "next/link";

const ReservedCard = () => {
  return (
    <Link
      href=""
      className="block p-4 border-primary rounded-md hover:shadow-md translate-all duration-300 ease-in-out "
    >
      <div className="flex gap-4">
        <img
          src="https://images.otstatic.com/prod1/31924439/1/small.jpg"
          alt=""
          className="w-[20%] rounded-md"
        />

        <div className="w-[80%] space-y-2">
          <h2 className="text-lg">Piatto Pizzeria + Enoteca-Charlottetown</h2>

          <div className="flex items-center gap-3 font-medium">
            <div className="w-5 h-5 bg-green-600 rounded-full grid place-items-center">
              <Image src={done} alt="" className="w-3 h-3" />
            </div>
            <p>Reservation Completed</p>
          </div>

          <div className="flex gap-5">
            <div className="flex gap-1">
              <Image src={avatar} alt="" className="w-6 h-6" />
              <p>2</p>
            </div>

            <div className="flex gap-1">
              <Image src={calender} alt="" className="w-6 h-6" />
              <p>Fri, May 5 at 9:45 p.m.</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ReservedCard;
