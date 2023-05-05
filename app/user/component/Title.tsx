"use client";

import { AuthContext } from "@/app/context/AuthContext";
import { useContext } from "react";

const Title = () => {
  const { data, loading } = useContext(AuthContext);

  return (
    <div className="m-auto w-2/3 py-8 px-16">
      {loading ? (
        <div className="w-64 h-11 bg-slate-200 animate-pulse"></div>
      ) : (
        <h2 className="text-4xl font-medium">
          {data?.first_name} {data?.last_name}
        </h2>
      )}
    </div>
  );
};

export default Title;
