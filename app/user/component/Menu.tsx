import Link from "next/link";

const Menu = () => {
  const profileItems = [
    {
      text: "Reservations",
      link: "/user/dining-dashboard",
    },
    {
      text: "Saved Restaurant",
      link: "/user/favorites",
    },
    {
      text: "Account Details",
      link: "/user/profile",
    },
    {
      text: "Payment Methods",
      link: "/user/payment-methods",
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
