"use client";

import { createContext, useEffect, useState } from "react";

interface Fav {
  id: number;
  slug: string;
  name: string;
  main_image: string;
}

interface FavContextApp {
  favData: Fav[];
  addToFavData: (favItem: Fav) => void;
}

export const FavContext = createContext<FavContextApp>({
  favData: [],
  addToFavData: () => {},
});

export const FavContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favData, setFavData] = useState<Fav[]>(
    JSON.parse(
      (typeof window !== "undefined" && localStorage.getItem("favData")) || "[]"
    )
  );

  useEffect(() => {
    setFavData(
      JSON.parse(
        (typeof window !== "undefined" && localStorage.getItem("favData")) ||
          "[]"
      )
    );
  }, []);

  const addToFavData = (favItem: Fav) => {
    const index = favData.findIndex((item) => item.id === favItem.id);

    if (index !== -1) {
      setFavData((prev) => {
        let filteredData = prev.filter((prev) => prev.id !== favItem.id);

        typeof window !== "undefined" &&
          localStorage.setItem("favData", JSON.stringify(filteredData));

        return filteredData;
      });
    } else {
      setFavData((prev) => {
        let updatedData = [...prev, favItem];

        typeof window !== "undefined" &&
          localStorage.setItem("favData", JSON.stringify(updatedData));
        return updatedData;
      });
    }
  };

  const valueItems = {
    favData,
    addToFavData,
  };

  return (
    <FavContext.Provider value={valueItems}>{children}</FavContext.Provider>
  );
};
