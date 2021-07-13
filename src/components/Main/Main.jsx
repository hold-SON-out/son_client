import React, { useState, useEffect } from "react";
import baby from "../../assets/images/baby.svg";
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
        <div className="m-card">이동하기</div>
        <div className="m-card">이동하기</div>
        <div className="m-card">이동하기</div>
        <div className="m-card">이동하기</div>
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
