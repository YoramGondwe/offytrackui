import axios from "axios";

axios.defaults.baseURL = "https://offytrack.herokuapp.com";
const coreService = axios.create({
  headers: {
    Authorization: `Bearer  ${localStorage.getItem("token")}`,
  },
});

export { coreService };
