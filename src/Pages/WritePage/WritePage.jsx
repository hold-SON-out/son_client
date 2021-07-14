import React, { useState } from "react";
import useInput from "../../Hooks/useInput";
import Header from "../../components/Header/Header";
import Write from "../../components/Write/Write";
import CommunityApi from "../../assets/api/CommunityApi.js";

const WritePage = () => {
  const title = useInput("");
  const [contnent, setContent] = useState("");

  const tryWrite = async () => {
    try {
      await CommunityApi.postWrite(title.value, contnent);
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
