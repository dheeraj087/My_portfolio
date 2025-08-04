import { react, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Mylogo from "./Mylogo.jsx";

import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

let data = {
  frist: "Dheerj dwivedi",
};
const Header = () => {
  const [media, setmedai] = useState(false);
  const [media2, setmedai2] = useState(false);

  let hendalclick = (e) => {
    setmedai(media === true ? false : true);
    // setmedai(prev=>!prev);  dusara tarika
  };
window.matchMedia("max-width: 720px")
  return (
    <>
     {media?
      ( <nav
        className="decoration-none uppercase text-[#E5F48C] p-1.5 
      m-auto pr-3 mt-1.5 mb-10 w-11/12 text-xl gap-3 h-8 bg-black-950 flex justify-between 
      items-center font-[Audiowide]"
      >
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-white" : "text-[#E5F48C]"
          }
        >
          <Mylogo yourlatter={data} className="flex grow-0.4" />
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-white" : "text-[#E5F48C]"
          }
        >
          home
        </NavLink>
        <NavLink
          to={"/about"}
          target="_blanck"
          className={({ isActive }) =>
            isActive ? "text-white" : "text-[#E5F48C]"
          }
        >
          About
        </NavLink>
        <NavLink
          target="_blanck"
          to={"/serves"}
          className={({ isActive }) =>
            isActive ? "text-white" : "text-[#E5F48C]"
          }
        >
          Serves
        </NavLink>
        <NavLink
          target="_blanck"
          to={"/contant"}
          className={({ isActive }) =>
            isActive ? "text-white" : "text-[#E5F48C]"
          }
        >
          contant
        </NavLink>
        <NavLink
          target="_blanck"
          to={"/mywark"}
          className={({ isActive }) =>
            isActive ? "text-white" : "text-[#E5F48C]"
          }
        >
          Work
        </NavLink>
      </nav>):
      (<div>
        <button onClick={(e) => hendalclick(e)}>
          {media ? (
            <AiOutlineClose className={`text-4xl text-white `} />
          ) : (
            <AiOutlineBars className="text-4xl text-white " />
          )}
        </button>
        {media ? (
          <div>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              home
            </NavLink>
            <NavLink
              to={"/about"}
              target="_blanck"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              About
            </NavLink>
            <NavLink
              target="_blanck"
              to={"/serves"}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              Serves
            </NavLink>
          </div>
        ) : (
          " "
        )}
      </div>)
}
    </>
  );
};
export default Header;
/* import { useState, useEffect } from "react";
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
// git push -u origin main */