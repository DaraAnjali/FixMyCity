import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const Navbar = () => {

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/login");
  };

  return (
    <nav className="bg-[#0F172A] border-b border-gray-800 px-8 py-4">

      <div className="flex flex-col md:flex-row items-center justify-between gap-5">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <img
            src="/logo.png"
            alt="FixMyCity"
            className="w-12 h-12 object-contain"
          />

          <h1 className="text-2xl font-bold text-white">
            <span className="text-[#0057D9]">Fix</span>
            <span className="text-[#3FAE00]">MyCity</span>
          </h1>

        </div>

        {/* NAVIGATION */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-white font-medium">

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

          {!user ? (
            <Link
              to="/login"
              className="bg-[#0057D9] px-5 py-2 rounded-lg"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-5 py-2 rounded-lg"
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