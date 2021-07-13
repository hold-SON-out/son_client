import React from "react";
import search from "../../assets/images/magnifying-glass.png";
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
          <div className="communityProject">
            <div className="communityHeader">
              <div className="communityTitle">
                <div className="communityName">이민욱</div>
                <div className="communityTime">3분전</div>
              </div>
              <div className="communityContent">내용</div>
            </div>
            <div className="communityNav">
              <img src={search} alt="" />
              <div className="communityNavText">댓글달기</div>
            </div>
            <div className="communityText">
              <div>
                <img src={search} alt="" />
                <div className="communityText-text">댓끌</div>
              </div>
              <div>3시간 전</div>
            </div>
            <div>
              <img src={search} />
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityMain;
