import React from "react";
import search from "../../assets/images/magnifying-glass.png";
import CommunityCard from "../CommunityCards/CommunityCard";
import "./CommunityMain.css";
const CommunityMain = () => {
  return (
    <>
      <div className="content">
        <div className="CommunityMainForm">
          <div className="CommunityMain-search">
            <div className="searchMain">
              <img
                className="CommunitySearchImg"
                src={search}
                style={{ width: "30px", height: "30px" }}
              />
              <input
                type="text"
                placeholder="검색할 단어를 입력해주세요"
                className="Community-searchInput"
              />
            </div>
            <div className="line">
              <div className="searchMainMenu">
                <div className="searchMainMenuTitle">제목</div>
                <div className="searchMainMenuWriter">작성자</div>
              </div>
            </div>
          </div>
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
        </div>
      </div>
    </>
  );
};

export default CommunityMain;
