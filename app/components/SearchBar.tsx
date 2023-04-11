"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (searchItem === "") return;
        router.push(`/search?city=${searchItem}`);
        setSearchItem("");
      }}
      className="text-left py-3 flex gap-2 flex-col sm:flex-row"
    >
      {/* SEARCH Bar */}
      <input
        type="text"
        placeholder="State, city or town"
        className="rounded-sm text-lg p-2 w-[450px]"
        onChange={(e) => setSearchItem(e.target.value)}
        value={searchItem}
      />
      <button
        type="submit"
        className="px-9 py-2 text-gray-50 bg-red-600 rounded-sm active:scale-95 transition-all duration-200"
      >
        Let&apos;s go
      </button>
      {/* SEARCH Bar */}
    </form>
  );
};

export default SearchBar;
