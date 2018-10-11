import { config } from "../../../../app.config";
import axios from "axios";

export default () => {
  return axios.create({
    baseURL: config.apiUrl
  });
};
