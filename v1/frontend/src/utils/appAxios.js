import axios from "axios";

const PORT = 3232 || process.env.PORT;

export const appAxios = axios.create({
  // baseURL: `http://localhost:${PORT}`,
  // baseURL: `https://adfa-world-default-rtdb.firebaseio.com`,
  baseURL: `http://localhost:3232`,
});

export default appAxios;
