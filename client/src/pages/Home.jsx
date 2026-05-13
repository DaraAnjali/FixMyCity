import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">

      <Navbar />

      {/* HERO SECTION */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-24">

        <img
          src="/logo.png"
          alt="FixMyCity"
          className="w-52 mb-8 drop-shadow-[0_0_25px_rgba(0,87,217,0.5)]"
        />

        <h1 className="text-6xl font-extrabold leading-tight max-w-4xl">

          Smart Civic Issue

          <span className="text-[#0057D9]"> Reporting </span>

          &

          <span className="text-[#3FAE00]"> Resolution </span>

          Platform

        </h1>

        <p className="text-gray-400 text-xl mt-8 max-w-3xl leading-relaxed">

          Empower citizens to report civic problems instantly,
          track complaint progress transparently,
          and help authorities build smarter cities efficiently.

        </p>

        {/* BUTTONS */}
        <div className="flex gap-6 mt-10">

          <button
            onClick={() => navigate("/report")}

            className="bg-[#0057D9] hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition"
          >

            Report Issue

          </button>

          <button
            onClick={() => navigate("/dashboard")}

            className="bg-[#FF8A00] hover:bg-orange-600 px-8 py-4 rounded-xl text-lg font-semibold transition"
          >

            Explore Dashboard

          </button>

        </div>

      </div>

    </div>
  );
};

export default Home;