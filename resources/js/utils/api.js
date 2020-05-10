import axios from "axios";

export default axios.create({
  baseURL: window.location.href + "api/v1/", // http://ideas-to.dev.test/api/v1/
  responseType: "json"
});
