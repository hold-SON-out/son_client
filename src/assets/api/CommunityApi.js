import { SERVER } from "../../config/config.json";
import axios from "axios";

class CommunityApi {
  async GetCommunityList() {
    const response = await axios.get(`${SERVER}/post`);

    return response;
  }
  async getListForTitle(search) {
    const response = await axios.get(`${SERVER}/post/search/title?q=${search}`);

    return response;
  }
  async getListForName(search) {
    const response = await axios.get(`${SERVER}/post/search/name?q=${search}`);

    return response;
  }
  async postWrite(title, content) {
    const body = {
      title,
      content,
    };
    await axios.post(`${SERVER}/post`, body, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
    console.log(body);
  }

  async postComment(postId, content) {
    const body = {
      postId,
      content,
    };
    const response = await axios.post(`${SERVER}/comment`, body, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
    console.log(response);
    return response;
  }
}

export default new CommunityApi();
