import React, { useState, useEffect } from "react";
import KidList from "../../components/KidList/KidList";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import useSelect from "../../Hooks/useSelect";
import useInput from "../../Hooks/useInput";
import KidApi from "../../assets/api/KidApi";

const KidListPage = () => {
  const searcher = useSelect("name");
  const searchValue = useInput("");

  const [kids, setKids] = useState([]);
  const trySearcher = async () => {
    console.log();
    try {
      await KidApi.getSearch(searcher.value, searchValue.value).then(current =>
        setKids(current.data.data)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const tryGetKidList = async () => {
    try {
      const response = await KidApi.getKidList();
      console.log(response.data.data);
      setKids(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => tryGetKidList(), []);

  return (
    <div>
      <Header />
      <KidList kids={kids}>
        <Search
          searcher={searcher}
          searchValue={searchValue}
          trySearcher={trySearcher}
        />
      </KidList>
    </div>
  );
};

export default KidListPage;
