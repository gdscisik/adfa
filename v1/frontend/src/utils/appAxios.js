import axios from "axios";

const PORT = 5173 || process.env.PORT;

export const appAxios = axios.create({
  baseURL: `http://localhost:${PORT}`,

  // baseURL: `https://adfa-world-default-rtdb.firebaseio.com`,
  // baseURL: `https://localhost:5173`,
});

export default appAxios;
