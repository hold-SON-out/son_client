import { SERVER } from "../../config/config.json";
import axios from "axios";

class AuthApi {
  async Login(id, password) {
    console.log("apu");
    const body = {
      id,
      password,
    };
    console.log(id, password);
    const response = await axios.post(`${SERVER}/auth/login`, body);
    console.log(response);
    return response;
  }

  async SignUp(id, password, name, purpose, agency, area) {
    const body = {
      id,
      password,
      name,
      purpose,
      agency,
      area,
    };

    const response = await axios.post(`${SERVER}/auth/register`, body);

    return response;
  }

  async CheckId(id) {
    const body = {
      id,
    };
    console.log(id);
    const response = await axios.post(`${SERVER}/auth/check`, body);

    return response;
  }
}

export default new AuthApi();
