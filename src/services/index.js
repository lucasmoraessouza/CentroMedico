import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,

  headers: {
    Authorization: localStorage.getItem("token")
      ? "Bearer " + localStorage.getItem("token")
      : "",
  },
});

api.interceptors.response.use(
  function (response) {
    return response;
  }
  // function (error) {
  //   if (error.response.status === 444) {
  //     window.location.href = "/acesso-restrito";
  //   }
  //   return Promise.reject(error);
  // }
);

export default api;
