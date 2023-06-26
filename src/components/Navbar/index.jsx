import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" mx-auto py-[10px] bg-[#0D0E10] lg:px-[40px] xl:px-[70px] ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 ">
          <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between lg:flex lg:justify-between lg:items-center  xl:justify-between xl:items-center">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="text-[#fff] text-[32px] DancingFont">
                Feane
              </a>
            </div>
            <div className="hidden lg:block sm:ml-6">
              <div className="flex space-x-4 lg:flex lg:items-center  xl:flex xl:items-center gap-8 ">
                <NavLink
                  href="#"
                  to={"/"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : "text-[#fff] text-[16px] uppercase font-medium hover:text-[#ffbe33]"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  href="#"
                  to={"/menu"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : "text-[#fff] text-[16px] uppercase font-medium hover:text-[#ffbe33]"
                  }
                >
                  Menu
                </NavLink>
                <NavLink
                  href="#"
                  to={"/about"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : "text-[#fff] text-[16px] uppercase font-medium hover:text-[#ffbe33]"
                  }
                >
                  About
                </NavLink>
                <NavLink
                  href="#"
                  to={"/booktable"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : "text-[#fff] text-[16px] uppercase font-medium hover:text-[#ffbe33]"
                  }
                >
                  Book Table
                </NavLink>
                <div className="lg:flex lg;items-center xl:flex items-center gap-[20px]">
                  <a
                    href="#"
                    className="text-[16px text-[#fff] font-bold hover:text-[#ffbe33]"
                  >
                    <FaUser />
                  </a>
                  <a
                    href="#"
                    className="text-[16px text-[#fff] font-bold hover:text-[#ffbe33]"
                  >
                    <SlBasket />
                  </a>
                  <a
                    href="#"
                    className="text-[16px text-[#fff] font-bold hover:text-[#ffbe33]"
                  >
                    <BsSearch />
                  </a>
                  <button className="w-[157px] h-[40px] bg-[#ffbe33]  rounded-full text-[#fff] text-[16px] font-medium hover:bg-[#E69C00]">
                    Order Online
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-2 rounded-md text-base font-medium"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to={"/"}
              className="text-gray-300 hover:text-[#ffbe33] uppercase  block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to={"/menu"}
              className="text-gray-300 hover:text-[#ffbe33]  uppercase block px-3 py-2 rounded-md text-base font-medium"
            >
              Menu
            </NavLink>
            <NavLink
              to={"/about"}
              className="text-gray-300 hover:text-[#ffbe33]  uppercase block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </NavLink>
            <NavLink
              to={"/booktable"}
              className="text-gray-300 hover:text-[#ffbe33] uppercase block px-3 py-2 rounded-md text-base font-medium"
            >
              Book Table
            </NavLink>
            <div className="lg:flex lg;items-center xl:flex items-center gap-[20px] nav_menu_Link">
              <a
                href="#"
                className="text-[16px text-[#fff] font-bold hover:text-[#ffbe33]"
              >
                <FaUser />
              </a>
              <a
                href="#"
                className="text-[16px text-[#fff] font-bold hover:text-[#ffbe33]"
              >
                <SlBasket />
              </a>
              <a
                href="#"
                className="text-[16px text-[#fff] font-bold hover:text-[#ffbe33]"
              >
                <BsSearch />
              </a>
              <button className="w-[157px] h-[40px] bg-[#ffbe33]  rounded-full text-[#fff] text-[16px] font-medium hover:bg-[#E69C00]">
                Order Online
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
