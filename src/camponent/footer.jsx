import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="w-[90%] relative m-auto text-amber-100 flex p-6 rounded-2xl mb-0 gap-10">
        <div className="grow-[0.7]">
          <p
            className={`text-right m-2 text-[102px] text-[#E5F48C] leading-26 font-['Audiowide',"sain-serif"]`}
          >
            DHEERAJ
          </p>
          <p
            className={`text-right m-2 text-[102px] text-[#E5F48C] leading-26 font-['Audiowide',"sain-serif"]`}
          >
            PORT
          </p>
          <p
            className={`text-right m-2 text-[102px] text-[#E5F48C] leading-26 font-['Audiowide',"sain-serif"]`}
          >
            FOLIO
          </p>
          <p className="text-xl text-white text-right mt-16 -mb-6">
            copyright@2025 Dheeraj dwivedi All Right Reserved
          </p>
        </div>
        <ul>
          <li className="text-right text-4xl mb-7 cursor-pointer ">
            {" "}
            <NavLink
              to={"/My_portfolio"}
              end
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              home
            </NavLink>
          </li>
          <li className="text-right text-4xl mb-7 cursor-pointer ">
            {" "}
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              About
            </NavLink>
          </li>
          <li className="text-right text-4xl mb-7 cursor-pointer ">
            <NavLink
              to={"/serves"}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              Serves
            </NavLink>
          </li>
          <li className="text-right text-4xl mb-7 cursor-pointer ">
            {" "}
            <NavLink
              to={"/mywark"}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              Work
            </NavLink>
          </li>
          <li className="text-right text-4xl mb-7 cursor-pointer ">
            {" "}
            <NavLink
              to={"/contant"}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              contant
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Footer;
