import { useState } from "react";

import { toast } from "react-toastify";

import Navbar from "../components/Navbar";

import { createIssue } from "../services/issueService";

import { useAuth } from "../context/AuthContext";

const ReportIssue = () => {

  const { user } = useAuth();

  const [formData, setFormData] = useState({
  title: "",
  description: "",
  category: "",
  location: "",
  latitude: "",
  longitude: "",
  image: null,
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

      await createIssue(
        formData,
        user.token
      );

      toast.success(
  "Issue Reported Successfully"
);

      setFormData({
        title: "",
        description: "",
        location: "",
        image: "",
      });

    } catch (error) {

      console.log(error);

      toast.error(
  "Failed To Report Issue"
);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">

      <Navbar />

      <div className="flex justify-center py-16">

        <form
          onSubmit={handleSubmit}
          className="bg-[#1E293B] p-6 md:p-10 rounded-2xl w-full max-w-[700px] mx-4"
        >

          <h1 className="text-4xl font-bold mb-8">
            Report Civic Issue
          </h1>

          {/* TITLE */}
          <input
            type="text"
            name="title"
            placeholder="Issue Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-4 rounded-lg mb-5 bg-gray-800 outline-none"
          />

          {/* DESCRIPTION */}
          <textarea
            name="description"
            placeholder="Describe the issue"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="w-full p-4 rounded-lg mb-5 bg-gray-800 outline-none"
          />

          

          {/* LOCATION */}
          <input
            type="text"
            name="location"
            placeholder="Enter Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-4 rounded-lg mb-5 bg-gray-800 outline-none"
          />

          <input
  type="number"
  name="latitude"
  placeholder="Latitude"
  value={formData.latitude}
  onChange={handleChange}
  className="w-full p-4 rounded-lg mb-5 bg-gray-800 outline-none"
/>

<input
  type="number"
  name="longitude"
  placeholder="Longitude"
  value={formData.longitude}
  onChange={handleChange}
  className="w-full p-4 rounded-lg mb-5 bg-gray-800 outline-none"
/>

          {/* IMAGE */}
          <input
  type="file"
  name="image"

  onChange={(e) =>
    setFormData({
      ...formData,
      image: e.target.files[0],
    })
  }

  className="w-full p-4 rounded-lg mb-8 bg-gray-800 outline-none"
/>

          {/* BUTTON */}
          <button
  className="w-full bg-[#0057D9] hover:bg-blue-700 py-4 rounded-xl font-semibold text-lg transition"
>
  Submit Issue
</button>

        </form>

      </div>

    </div>
  );
};

export default ReportIssue;