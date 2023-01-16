import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  
  /*--------------------------ТЕМНА ТЕМА-----------------------------*/

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDarkTheme(true);
      document.body.classList.add("dark-theme");
    }
  }, []);

  const toggleTheme = () => {
    toggleIcon();
    setIsDarkTheme(!isDarkTheme);
    if (isDarkTheme) {
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark-theme");
    } else {
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark-theme");
    }
  };

  /*-------------------РОЗГОРТАННЯ БОКОВОГО МЕНЮ----------------------*/
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const menu = document.querySelector(".navbar-menu");
    menu.classList.toggle("is-active");
  };

  const [isMoon, setIsMoon] = useState(true);

  const toggleIcon = () => {
    setIsMoon(!isMoon);
  };
  /*-------------------ЗГОРТАННЯ БОКОВОГО МЕНЮ ПРИ X ШИРИНІ---------------------*/

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
        const menu = document.querySelector(".navbar-menu");
        menu.classList.remove("is-active");
      }
    };

    const handleButtonClick = () => {
      setIsOpen(false);
      const menu = document.querySelector(".navbar-menu");
      menu.classList.remove("is-active");
    };

    window.addEventListener("resize", handleResize);
    const buttons = document.querySelectorAll(".navbar-menu .navbar-item");
    buttons.forEach((button) =>
      button.addEventListener("click", handleButtonClick)
    );

    return () => {
      window.removeEventListener("resize", handleResize);
      buttons.forEach((button) =>
        button.removeEventListener("click", handleButtonClick)
      );
    };
  }, [isOpen]);

  /*--------------------------------------------------------------------------*/

  /*--------------------------ЗМІНА СТИЛЮ НАВБАРА ПРИ ПЕРЕХОДІ НЕ НА MAIN І ПРИ СКРОЛІ НА MAIN---------------------------------*/
  const [isAboutPage, setIsAboutPage] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/about") {
      setIsAboutPage(true);
    } else if (window.location.pathname === "/team") {
      setIsAboutPage(true);
    } else if (window.location.pathname === "/support") {
      setIsAboutPage(true);
    }
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/") {
      const navbar = document.querySelector(".navbar");
      const handleScroll = () => {
        if (window.scrollY > 968) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isAboutPage]);
  /*-------------------------------------------------------------------------------*/
  

  return (
    <div className="App">
      <Router>
        <Navbar
          setIsAboutPage={setIsAboutPage}
          isAboutPage={isAboutPage}
          toggleTheme={toggleTheme}
          toggleMenu={toggleMenu}
          isOpen={isOpen}
          isMoon={isMoon}
        />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/team" exact element={<OurTeam />} />
          <Route path="*" exact element={<Main />} />
        </Routes>
        <Footer setIsAboutPage={setIsAboutPage} />
      </Router>
    </div>
  );
}

export default App;
