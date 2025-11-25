type DesktopNavProps = {
  activeSection: string;
  scrollToSection: (section: string) => void;
};

const DesktopNav = ({ activeSection, scrollToSection }: DesktopNavProps) => {
  const links = ["home", "menu", "about", "contact"];
  return (
    <nav className="bg-white w-full">
      <div className="flex items-center justify-between px-4 h-16">
        <h2 className="text-xl md:text-2xl font-bold uppercase bg-linear-to-r from-orange-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
          QuickBite
        </h2>
        <div className="space-x-6">
          {links.map((link) => (
            <a
              key={link}
              href={link}
              className={`cursor-pointer uppercase font-semibold text-md transition-colors ${
                activeSection === link
                  ? "text-orange-600 underline underline-offset-8 decoration-2"
                  : "text-gray-700 hover:text-orange-600"
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link);
              }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
