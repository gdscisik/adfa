import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();
// const PORT = 3232 || process.env.BACKEND_PORT;
const PORT = 3232 || 3000;

export const appAxios = axios.create({
  baseURL: `http://localhost:${PORT}`,
  // baseURL: `https://adfa-world-default-rtdb.firebaseio.com`,
  // baseURL: `http://localhost:5173`,
});

export default appAxios;
