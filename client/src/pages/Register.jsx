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

      toast.error(
        "Registration Failed"
      );
    }
  };

  return (
    <div
      className="
        min-h-screen
        bg-gray-50 dark:bg-[#0F172A]
        flex items-center justify-center
        transition-colors duration-300
      "
    >

      <form
        onSubmit={handleSubmit}
        className="
          bg-white dark:bg-[#1E293B]
          p-6 md:p-10
          rounded-2xl
          w-full
          max-w-[400px]
          mx-4
          shadow-lg
        "
      >

        <h1
          className="
            text-3xl
            text-gray-900 dark:text-white
            font-bold
            mb-8
            text-center
          "
        >
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
          className="
            w-full
            p-4
            rounded-lg
            mb-5
            bg-gray-100 dark:bg-gray-800
            text-gray-900 dark:text-white
            placeholder-gray-500
            outline-none
          "
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          className="
            w-full
            p-4
            rounded-lg
            mb-5
            bg-gray-100 dark:bg-gray-800
            text-gray-900 dark:text-white
            placeholder-gray-500
            outline-none
          "
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          className="
            w-full
            p-4
            rounded-lg
            mb-5
            bg-gray-100 dark:bg-gray-800
            text-gray-900 dark:text-white
            placeholder-gray-500
            outline-none
          "
        />

        <button
          className="
            w-full
            bg-[#0057D9]
            hover:bg-blue-700
            text-white
            py-4
            rounded-lg
            font-semibold
            transition
          "
        >
          Register
        </button>

        <p
          className="
            mt-5
            text-center
            text-gray-500 dark:text-gray-400
          "
        >
          Already have an account?

          <span
            onClick={() => navigate("/login")}
            className="
              text-[#0057D9]
              cursor-pointer
              ml-2
            "
          >
            Login
          </span>

        </p>

      </form>

    </div>
  );
};

export default Register;