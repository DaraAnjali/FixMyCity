import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../services/authService";

import { useAuth } from "../context/AuthContext";

const Login = () => {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
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

      const data = await loginUser(formData);

      login(data);

      toast.success("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-[#1E293B] p-6 md:p-10 rounded-2xl w-full max-w-[400px] mx-4"
      >

        <h1 className="text-3xl text-white font-bold mb-8 text-center">
          Login
        </h1>

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
          className="w-full bg-[#3FAE00] hover:bg-green-700 text-white py-4 rounded-lg font-semibold transition"
        >
          Login
        </button>

      </form>

    </div>
  );
};

export default Login;