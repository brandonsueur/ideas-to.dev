import axios from "axios";

export default axios.create({
  baseURL: "http://okkou.test/api/v1/",
  responseType: "json"
});
