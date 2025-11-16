/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";

const mealSearch = () => {
//   const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
  
  }, [search]);

  return (
    <div>
      {/* Search input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search meals..."
          className="input input-bordered w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>


    </div>
  );
};

export default mealSearch;
