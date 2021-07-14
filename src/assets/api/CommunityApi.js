import { SERVER } from "../../config/config.json";
import axios from "axios";

class CommunityApi {
  async GetCommunityList() {
    const response = axios.get(`${SERVER}/post`);
    console.log(response);
    return response;
  }
  async getListForTitle(search) {
    const response = axios.get(`${SERVER}/post/search/title?q=${search}`);
    console.log(response);
    return response;
  }
  async getListForName(search) {
    const response = axios.get(`${SERVER}/post/search/name?q=${search}`);
    console.log(response);
    return response;
  }
}

export default new CommunityApi();
