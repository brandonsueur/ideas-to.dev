import axios from "axios";

export default axios.create({
  baseURL: "http://ideas-to.dev.test/api/v1/",
  responseType: "json",
});
