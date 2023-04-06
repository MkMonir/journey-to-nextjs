"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [searchItem, setSearchItem] = useState("");

  return (
    <div>
      {/* Header */}
      <header className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
        <div className="text-center mt-10">
          <h1 className="text-white text-5xl font-bold mb-2">
            Find your table for any occasion
          </h1>

          {/* SEARCH Bar */}
          <div className="text-left py-3 m-auto flex justify-center">
            <input
              type="text"
              placeholder="State, city or town"
              className="rounded-sm text-lg mr-3 p-2 w-[450px]"
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <button
              className="px-9 py-2 text-gray-50 bg-red-600 rounded-sm active:scale-90 transition-all duration-200"
              onClick={() => {
                if (searchItem === "banana") return;

                router.push("/search");
              }}
            >
              Let&apos;s go
            </button>
          </div>
          {/* SEARCH Bar */}
        </div>
      </header>
      {/* Header */}
    </div>
  );
};

export default Header;
