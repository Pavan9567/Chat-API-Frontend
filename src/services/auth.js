import axios from "axios";

const API_URL = "http://localhost:1337/api/auth";

export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/local/register`, {
      username,
      email,
      password
    });
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response.data);
    throw error;
  }
};

export const login = async (identifier, password) => {
  try {
    const response = await axios.post(`${API_URL}/local`, {
      identifier,
      password
    });
    localStorage.setItem("jwt", response.data.jwt); // Store JWT token
    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response.data);
    throw error;
  }
};
