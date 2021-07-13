import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Detail from "../../components/Details/Detail";
import Header from "../../components/Header/Header";
import KidApi from "../../assets/api/KidApi";

const DetaliPage = () => {
  const [kid, setKid] = useState();
  const history = useHistory();
  //쿼리 스트링
  const query = history.location.search.split("=")[1];

  useEffect(
    () =>
      KidApi.getKidDetail(query).then(current => {
        setKid(current.data.data);
      }),
    []
  );
  return (
    <>
      <Header />
      {kid && <Detail kid={kid} />}
    </>
  );
};

export default DetaliPage;
