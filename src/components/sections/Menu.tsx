"use client";

import { useState } from "react";
import { foods } from "../../data/food";
import FoodCard from "../FoodCard";
import FilterBar from "../FilterBar";

export default function Home() {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All" ? foods : foods.filter((f) => f.category === selected);

  return (
    <section id="menu" className="px-6 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Explore Our{" "}
          <span className="bg-linear-to-r from-orange-600 via-orange-500 to-red-600 bg-clip-text text-transparent inline-block">
            Menu
          </span>
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Fresh picks curated just for you
        </p>
      </div>

      <FilterBar selected={selected} setSelected={setSelected} />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
}
