import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import CommunityApi from "../../assets/api/CommunityApi";
import searchImg from "../../assets/images/magnifying-glass.png";
import useInput from "../../Hooks/useInput";
import CommunityCard from "../CommunityCards/CommunityCard";
import "./CommunityMain.css";
const CommunityMain = () => {
  const [communityList, setCommunityList] = useState([]);
  const [searchMenu, setSearchMenu] = useState(false);
  const search = useInput("");
  const tryGetCommunityList = async () => {
    const response = await CommunityApi.GetCommunityList();
    console.log(response.data.data[0].user);
    setCommunityList(response.data.data);
  };

  const searchTitle = () => {
    setSearchMenu(false);
  };
  const searchName = () => {
    setSearchMenu(true);
  };

  const tryGetListForTitle = async () => {
    const response = await CommunityApi.getListForTitle(search.value);
    console.log(response);
    return response;
  };

  const tryGetListForName = async () => {
    const response = await CommunityApi.getListForName(search.value);
    console.log(response);
    return response;
  };

  const trySearchKeyPress = (e) => {
    console.log(e);
    setSearchMenu(e.target.value);
    if (e.target.value === "") {
      tryGetCommunityList();
    } else if (e.key === "Enter") {
      if (searchMenu === false) {
        tryGetListForTitle().then((res) => {
          console.log(res);
          setCommunityList(res.data.data);
        });
      } else {
        tryGetListForName().then((res) => {
          console.log(res);
          setCommunityList(res.data.data);
        });
      }
    }
  };

  useEffect(() => {
    if (search.value) {
    } else {
      tryGetCommunityList();
    }
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
                onChange={trySearchKeyPress}
              />
            </div>
            <div className="line">
              <div className="searchMainMenu">
                <div
                  className={
                    searchMenu
                      ? "searchMainMenuTitle"
                      : "searchMainMenuTitle choice"
                  }
                  onClick={searchTitle}
                >
                  제목
                </div>
                <div
                  className={
                    searchMenu
                      ? "searchMainMenuWriter choice"
                      : "searchMainMenuWriter"
                  }
                  onClick={searchName}
                >
                  작성자
                </div>
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
