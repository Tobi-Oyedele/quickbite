import Navbar from "./components/Navbar/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Home from "./components/sections/Home";
import Menu from "./components/sections/Menu";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Menu />
      <About />
      <Contact />
    </div>
  );
};

export default App;
