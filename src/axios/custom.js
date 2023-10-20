import axios from "axios";
import { useSelector } from "react-redux";

const token = useSelector((store) => store.auth.token);

const headers = {
  "Content-Type": "application/json",
};

if (token) {
  headers.Authorization = `Bearer ${token}`;
}

const authFetch = axios.create({
  baseURL: "https://localhost:44383",
  headers,
});

export default authFetch;
