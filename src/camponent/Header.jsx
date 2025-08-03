import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Mylogo from "./Mylogo.jsx";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About", target: "_blank" },
  { to: "/serves", label: "Serves", target: "_blank" },
  { to: "/contant", label: "Contact", target: "_blank" },
  { to: "/mywark", label: "Work", target: "_blank" },
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(false); // screen width
  const [menuOpen, setMenuOpen] = useState(false); // toggle icon

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 820);
    };
    checkScreen(); // initial
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const navLinkClasses = ({ isActive }) =>
    isActive ? "text-white" : "text-[#E5F48C]";

  return (
    <>
      {!isMobile ? (
        // ✅ Desktop Navbar
        <nav className="uppercase text-[#E5F48C] p-2 m-auto mt-2 mb-10 w-screen text-xl h-10 bg-black-950 flex justify-between items-center font-[Audiowide]">
          <NavLink to="/" className={navLinkClasses}>
            <Mylogo yourlatter={{ frist: "Dheerj dwivedi" }} />
          </NavLink>
          <div className="flex gap-4">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                target={item.target}
                className={navLinkClasses}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : (
        // ✅ Mobile Toggle
        <div className="bg-black-950 text-[#E5F48C] p-3">
          <div className="flex items-center justify-between">
            <Mylogo yourlatter={{ frist: "Dheerj dwivedi" }} />
            <button onClick={toggleMenu} className="text-3xl text-white">
              {menuOpen ? <AiOutlineClose /> : <AiOutlineBars />}
            </button>
          </div>
          {menuOpen && (
            <div className="flex flex-col gap-3 mt-4">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.to}
                  target={item.target}
                  className={navLinkClasses}
                  onClick={() => setMenuOpen(false)} // auto-close after click
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/dheeraj087/My_portfolio.git
// git push -u origin main