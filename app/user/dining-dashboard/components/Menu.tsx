import Link from "next/link";

const Menu = () => {
  const profileItems = [
    {
      text: "Reservations",
      link: "",
    },
    {
      text: "Saved Restaurant",
      link: "",
    },
    {
      text: "Account Details",
      link: "/user/profile/edit",
    },
  ];

  return (
    <div>
      <ul>
        {profileItems?.map((item, i) => (
          <li key={i}>
            <Link href={item.link} className="block my-4 text-gray-600">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
