import { Menu, X } from "lucide-react";

type MobileNavProps = {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (section: string) => void;
};

const MobileNav = ({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}: MobileNavProps) => {
  const links = ["home", "menu", "about", "contact"];
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h2 className="text-xl md:text-2xl font-bold uppercase bg-linear-to-r from-orange-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
            QuickBite
          </h2>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={29} /> : <Menu size={29} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="bg-white fixed inset-0 top-16 z-40">
          {links.map((item) => (
            <button
              key={item}
              className={`block w-full text-left text-xl uppercase px-6 py-3 font-semibold ${
                activeSection === item
                  ? "text-orange-600 underline underline-offset-8 decoration-2"
                  : "text-gray-700"
              }`}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
