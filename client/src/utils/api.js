import axios from "axios";

const API = axios.create({
  baseURL: "https://fixmycity-d5o2.onrender.com/api",
});

export default API;