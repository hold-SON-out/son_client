import axios from "axios";
import { SERVER } from "../../config/config.json";

class KidApi {
  async getKidList() {
    const response = await axios.get(`${SERVER}/child/`);
    console.log(response);
    return response;
  }
  async getKidDetail(id) {
    try {
      const response = await axios.get(`${SERVER}/child/${id}`);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async getSearch(searcher, searchValue) {
    console.log(searcher, searchValue);
    try {
      const response = await axios.get(
        `${SERVER}/child/search/${searcher}?q=${
          searcher !== "age" ? searchValue : searchValue * 1
        }`
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new KidApi();
