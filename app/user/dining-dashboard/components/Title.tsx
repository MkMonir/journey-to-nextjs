"use client";

import { AuthContext } from "@/app/context/AuthContext";
import { useContext } from "react";

const Title = () => {
  const { data } = useContext(AuthContext);

  return (
    <div className="m-auto w-2/3 py-8 px-16">
      <h2 className="text-4xl font-medium">
        {data?.first_name} {data?.last_name}
      </h2>
    </div>
  );
};

export default Title;
