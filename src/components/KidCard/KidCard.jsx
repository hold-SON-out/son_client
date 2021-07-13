import React from "react";
import "./kidCard.css";

const KidCard = ({ kid }) => {
  return (
    <div className="kidCard">
      <img src={kid.photo} alt="" className="kC-image" />
      <div className="kC-info">
        <div className="kC-name">{kid.name}</div>
        <div className="kC-age">나이 : {kid.age}세</div>
        <div className="kC-birth">생일 : {kid.birth}</div>
        <div className="kC-Uniqueness">특이사항 : {kid.Uniqueness}</div>
        <div className="kC-Introduce">소개글 : {kid.Introduce}</div>
      </div>
      <button className="kC-button">프로필 보기</button>
    </div>
  );
};

export default KidCard;
