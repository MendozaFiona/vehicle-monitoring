import axios from "axios";

const API_URL = "/api/users/";

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = async () => {
  localStorage.removeItem("user"); // there's other way, use server and set http only cookie
};

const authService = {
  login,
  logout,
};

export default authService;
