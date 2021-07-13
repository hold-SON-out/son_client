import { SERVER } from "../../config/config.json";
import { axios } from "axios";

class AuthApi {
  async Login(id, email) {
    const body = {
      id,
      email,
    };

    const response = axios.post(`${SERVER}/auth/login`, body);
    return response;
  }
}

export default new AuthApi();
