import React, { useState, useEffect } from "react";
import KidList from "../../components/KidList/KidList";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import useSelect from "../../Hooks/useSelect";
import useInput from "../../Hooks/useInput";
import KidApi from "../../assets/api/KidApi";

const KidListPage = () => {
  const searcher = useSelect("이름");
  const searchValue = useInput("");

  const [kids, setKids] = useState([]);
  const tryGetKidList = async () => {
    const response = await KidApi.getKidList();
    console.log(response.data.data);
    setKids(response.data.data);
  };
  useEffect(() => tryGetKidList(), []);

  return (
    <div>
      <Header />
      <KidList kids={kids}>
        <Search searcher={searcher} searchValue={searchValue} />
      </KidList>
    </div>
  );
};

export default KidListPage;
