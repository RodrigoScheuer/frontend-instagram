import axios from "axios";

const api = axios.create({
  baseURL:"https://backend-instagram-v1.herokuapp.com/"
  // baseURL: "http://localhost:3333"
});

export default api;
