import React, { useState } from "react";
import useInput from "../../Hooks/useInput";
import Header from "../../components/Header/Header";
import Write from "../../components/Write/Write";

const WritePage = () => {
  const title = useInput("");
  const [contnent, setContent] = useState("");
  return (
    <div>
      <Header />
      <Write title={title} contnent={contnent} setContent={setContent} />
    </div>
  );
};

export default WritePage;
