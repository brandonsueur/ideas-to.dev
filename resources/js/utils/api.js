import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/api/v1/", // http://ideas-to.dev.test/api/v1/
  responseType: "json",
});
