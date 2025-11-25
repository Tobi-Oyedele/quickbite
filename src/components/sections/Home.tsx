const Home = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative bg-linear-to-r from-orange-600 to-red-600 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          {/* Text Section */}
          <div className="flex-1 flex flex-col items-start text-left space-y-6 z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to{" "}
              <span className="inline-block bg-white bg-clip-text text-transparent drop-shadow-lg">
                QuickBite
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-orange-100 max-w-xl">
              Discover mouth‑watering recipes, quick meals, and delicious food
              ideas curated specially for you. Dive into a world of flavor!
            </p>

            <button
              onClick={scrollToMenu}
              className="cursor-pointer px-8 py-4 bg-white text-orange-600 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Explore Menu
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center z-10">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="Delicious food"
              className="w-full max-w-xl rounded-2xl shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Home;
