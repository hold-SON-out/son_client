import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useInput from "../../Hooks/useInput";
import Header from "../../components/Header/Header";
import Write from "../../components/Write/Write";
import CommunityApi from "../../assets/api/CommunityApi.js";

const WritePage = () => {
  const title = useInput("");
  const [contnent, setContent] = useState("");
  const history = useHistory();

  const goMain = () => {
    history.push("/main");
  };

  const tryWrite = async () => {
    try {
      !title.value || !contnent
        ? alert("제목과 글을 입력해주세요")
        : await CommunityApi.postWrite(title.value, contnent).then(() =>
            goMain()
          );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <Write
        title={title}
        contnent={contnent}
        setContent={setContent}
        tryWrite={tryWrite}
      />
    </div>
  );
};

export default WritePage;
