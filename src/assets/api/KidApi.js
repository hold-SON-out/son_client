import axios from "axios";
import { SERVER } from "../../config/config.json";

class KidApi {
  async getKidList() {
    const response = await axios.get(`${SERVER}/child/`);
    console.log(response);
    return response;
  }
}

export default new KidApi();
