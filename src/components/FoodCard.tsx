import { Heart } from "lucide-react";
import type { Food } from "../data/food";
import { useFavorites } from "../store/favourites";

export default function FoodCard({ food }: { food: Food }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFav = favorites.includes(food.id);

  return (
    <section className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <a href={`/food/${food.id}`}>
          <img
            src={food.image}
            className="w-full h-56 object-cover transition-transform duration-700"
            alt={food.name}
          />
        </a>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Favorite Button */}
        <button
          onClick={() => toggleFavorite(food.id)}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
        >
          <Heart
            className={`w-5 h-5 transition-all duration-300 ${
              isFav ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="inline-block bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium text-gray-700 shadow-md">
            {food.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-xl text-gray-900 mb-1 transition-colors duration-300">
          {food.name}
        </h3>

        <p className="text-gray-900">{food.description}</p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-orange-600">
              ₦{food.price}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
