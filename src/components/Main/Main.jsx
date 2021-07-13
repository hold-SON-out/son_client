import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import baby from "../../assets/images/baby.png";
import searchFamily from "../../assets/images/searchFamily.png";
import community from "../../assets/images/community.png";
import addKid from "../../assets/images/addKid.png";
import nextLevel from "../../assets/images/nextLevel.png";
import useScroll from "../../Hooks/useScroll";
import "./Main.css";

const Main = () => {
  const firstPage = useScroll(true);
  const [isLogoActive, setLogoActive] = useState(1);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    const { scrollTop } = document.documentElement;
    console.log(scrollTop, "aa");
    firstPage.onScroll();
    !firstPage.value && setLogoActive(isLogoActive + 1);
  };

  return (
    <div className="main">
      <img
        className={"m-background " + (firstPage.value ? "front" : "back")}
        src={baby}
        alt=""
      />
      <div className="m-cards">
        <Link to="/kidList">
          <div className="m-card">
            가족 찾기
            <img className="m-c-item" src={searchFamily} alt="" />
          </div>
        </Link>
        <Link to="/kidList">
          <div className="m-card">
            커뮤니티 <img className="m-c-item" src={community} alt="" />
          </div>
        </Link>
        <Link to="/kidList">
          <div className="m-card">
            아이 등록
            <img className="m-c-item" src={addKid} alt="" />
          </div>
        </Link>
        <Link to="/kidList">
          <div className="m-card">
            법적 절차
            <img className="m-c-item" src={nextLevel} alt="" />
          </div>
        </Link>
      </div>
      <div
        className={"m-form " + (firstPage.value ? "front" : "back")}
        onScroll={onScroll}
      >
        <div className="m-f-title">SON을 내밀다</div>
      </div>
    </div>
  );
};

export default Main;
