import React from "react";
import { Link } from "react-router-dom";
import "./kidCard.css";

const KidCard = ({ kid }) => {
  return (
    <div className="kidCard">
      <img src={kid.file.fileLocation} alt="" className="kC-image" />
      <div className="kC-info">
        <div className="kC-name">{kid.name}</div>
        <div className="kC-age">나이 : {kid.age}세</div>
        <div className="kC-birth">
          성별 : {kid.sex === "W" ? "여성" : "남성"}
        </div>
        <div className="kC-Uniqueness">지역 : {kid.area}</div>
      </div>
      <Link to={"/details?id=" + kid.idx} className="kC-button">
        프로필 보기
      </Link>
    </div>
  );
};

export default KidCard;
