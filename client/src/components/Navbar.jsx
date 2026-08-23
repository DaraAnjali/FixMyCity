import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import { useTheme } from "../context/ThemeContext";

const Navbar = () => {

  const { user, logout } = useAuth();

  const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/login");
  };

  return (
    <nav
      className="
        bg-white dark:bg-[#0F172A]
        border-b border-gray-200 dark:border-gray-800
        px-8 py-4
        transition-colors duration-300
      "
    >

      <div className="flex flex-col md:flex-row items-center justify-between gap-5">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <img
            src="/logo.png"
            alt="FixMyCity"
            className="w-12 h-12 object-contain"
          />

          <h1 className="text-2xl font-bold">

            <span className="text-[#0057D9]">
              Fix
            </span>

            <span className="text-[#3FAE00]">
              MyCity
            </span>

          </h1>

        </div>

        {/* NAVIGATION */}
        <div
          className="
            flex flex-wrap
            justify-center
            items-center
            gap-4 md:gap-8
            text-gray-800
            dark:text-white
            font-medium
          "
        >

          <Link
            to="/"
            className="hover:text-[#0057D9]"
          >
            Home
          </Link>

          {user && (
            <>
              <Link
                to="/report"
                className="hover:text-[#FF8A00]"
              >
                Report
              </Link>

              <Link
                to="/dashboard"
                className="hover:text-[#3FAE00]"
              >
                Dashboard
              </Link>
            </>
          )}

          {/* THEME BUTTON */}
          <button
            onClick={toggleTheme}
            title={
              theme === "dark"
                ? "Switch to Light Mode"
                : "Switch to Dark Mode"
            }
            className="
              w-11 h-11
              rounded-full
              flex items-center justify-center
              bg-gray-200
              dark:bg-gray-800
              hover:scale-105
              transition
              text-xl
            "
          >

            {theme === "dark" ? "☀️" : "🌙"}

          </button>

          {!user ? (

            <Link
              to="/login"
              className="
                bg-[#0057D9]
                hover:bg-blue-700
                text-white
                px-5 py-2
                rounded-lg
              "
            >
              Login
            </Link>

          ) : (

            <button
              onClick={handleLogout}
              className="
                bg-red-500
                hover:bg-red-600
                text-white
                px-5 py-2
                rounded-lg
              "
            >
              Logout
            </button>

          )}

        </div>

      </div>

    </nav>
  );
};

export default Navbar;