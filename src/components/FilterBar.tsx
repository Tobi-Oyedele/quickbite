const categories = ["All", "Breakfast", "Lunch", "Dessert"];

export default function FilterBar({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (category: string) => void;
}) {
  return (
    <section className="flex gap-3 my-8 flex-wrap justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 cursor-pointer
        ${
          selected === cat
            ? "bg-linear-to-r from-orange-600 via-orange-500 to-red-600 text-white shadow-orange-200"
            : "bg-white text-gray-700 border border-gray-200 hover:border-orange-400 hover:text-orange-600"
        }`}
        >
          {cat}
        </button>
      ))}
    </section>
  );
}
