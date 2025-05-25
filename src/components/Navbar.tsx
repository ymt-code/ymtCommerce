import { useState } from "react";
import { CircleUser, ShoppingCart, Menu, X } from "lucide-react";
import CustomNavLink from "./CustomNavLink";
import MiniNavbar from "./MiniNavbar";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <MiniNavbar />
      <header className="shadow-sm bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1250px] mx-auto flex justify-between items-center py-4 px-4">
          <h1 className="text-3xl font-bold text-green-700 tracking-tight">
            پرشیان موبایل
          </h1>

          <button
            className="md:hidden text-gray-700 hover:text-green-600 transition"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          <nav className="hidden md:flex items-center gap-4 text-gray-700">
            <CustomNavLink to="/">خانه</CustomNavLink>
            <CustomNavLink to="/store">محصولات</CustomNavLink>
            <CustomNavLink to="/about">درباره ما</CustomNavLink>
            <CustomNavLink to="/articles">مقالات</CustomNavLink>
          </nav>

          <div className="relative w-72 hidden md:block">
            <input
              type="text"
              placeholder="جستجو..."
              className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-300 outline-none transition text-sm"
            />
            <svg
              className="w-5 h-5 absolute right-3 top-2.5 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M16.65 10.65A6 6 0 1110.65 4.65a6 6 0 016 6z"
              />
            </svg>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer hover:text-green-600 transition">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                3
              </span>
            </div>
            <CircleUser className="w-6 h-6 text-gray-700 cursor-pointer hover:text-green-600 transition" />
          </div>
        </div>

        {mobileOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col gap-2 p-4 text-gray-700">
              <li>
                <CustomNavLink to="/">خانه</CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/store">محصولات</CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/about">درباره ما</CustomNavLink>
              </li>
              <li>
                <CustomNavLink to="/articles">مقالات</CustomNavLink>
              </li>
              <li className="mt-2">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="جستجو..."
                    className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-300 outline-none transition text-sm"
                  />
                  <svg
                    className="w-5 h-5 absolute right-3 top-2.5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M16.65 10.65A6 6 0 1110.65 4.65a6 6 0 016 6z"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;
