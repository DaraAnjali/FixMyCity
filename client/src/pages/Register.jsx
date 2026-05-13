import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../services/authService";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await registerUser(formData);

      toast.success(
  "Registration Successful"
);

      navigate("/login");

    } catch (error) {
      console.log(error);

      toast.success(
  "Registration Successful"
);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-[#1E293B] p-6 md:p-10 rounded-2xl w-full max-w-[400px] mx-4"
      >

        <h1 className="text-3xl text-white font-bold mb-8 text-center">
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          className="w-full p-4 rounded-lg mb-5 bg-gray-800 text-white outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          className="w-full p-4 rounded-lg mb-5 bg-gray-800 text-white outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          className="w-full p-4 rounded-lg mb-5 bg-gray-800 text-white outline-none"
        />

        <button
          className="w-full bg-[#0057D9] hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition"
        >
          Register
        </button>

      </form>

    </div>
  );
};

export default Register;