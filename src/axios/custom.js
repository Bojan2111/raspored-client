import axios from "axios";
// import authSlice from "../store/authSlice";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  // Authorization: AUTH_TOKEN,
};

const authFetch = axios.create({
  baseURL: "https://localhost:44383",
  headers,
});

export default authFetch;
