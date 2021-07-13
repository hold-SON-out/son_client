import React, { useState, useEffect } from "react";
import baby from "../../assets/images/baby.svg";
import "./Main.css";

const Main = () => {
  const [isLogoActive, setLogoActive] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;
    console.log(scrollHeight / 150, scrollTop);
    setLogoActive(scrollTop < scrollHeight / 150);
  };

  return (
    <div className="main">
      <img
        className={"m-background " + (isLogoActive ? "front" : "back")}
        src={baby}
        alt=""
      />
      <div className="m-form" onScroll={onScroll}>
        <div className="m-f-title">SON을 내밀다</div>
      </div>
    </div>
  );
};

export default Main;
