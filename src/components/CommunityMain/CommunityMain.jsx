import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import CommunityApi from "../../assets/api/CommunityApi";
import searchImg from "../../assets/images/magnifying-glass.png";
import useInput from "../../Hooks/useInput";
import CommunityCard from "../CommunityCards/CommunityCard";
import "./CommunityMain.css";
const CommunityMain = () => {
  const [communityList, setCommunityList] = useState([]);
  const search = useInput("");
  const tryGetCommunityList = async () => {
    const response = await CommunityApi.GetCommunityList();
    console.log(response.data.data[0].user);
    setCommunityList(response.data.data);
  };

  const tryGetListForTitle = async () => {
    const response = await CommunityApi.getListForTitle(search.value);
    console.log(response);
  };

  const tryGetListForName = async () => {
    const response = await CommunityApi.getListForName(search.value);
    console.log(response);
  };

  const trySearchKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
    }
  };
  useEffect(() => {
    tryGetCommunityList();
  }, []);
  return (
    <>
      <div className="content">
        <div className="CommunityMainForm">
          <div className="CommunityMain-search">
            <div className="searchMain">
              <img
                className="CommunitySearchImg"
                src={searchImg}
                style={{ width: "30px", height: "30px" }}
              />
              <input
                type="text"
                placeholder="검색할 단어를 입력해주세요"
                className="Community-searchInput"
                {...search}
                onKeyPress={trySearchKeyPress}
              />
            </div>
            <div className="line">
              <div className="searchMainMenu">
                <div className="searchMainMenuTitle">제목</div>
                <div className="searchMainMenuWriter">작성자</div>
              </div>
            </div>
          </div>
          {communityList.map((card, idx) => (
            <CommunityCard key={idx} card={card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CommunityMain;
