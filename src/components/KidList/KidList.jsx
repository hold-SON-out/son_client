import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import KidApi from "../../assets/api/KidApi";
import KidCard from "../KidCard/KidCard";
import "./KidList.css";

const KidList = ({ kids, children }) => {
  return (
    <div className="kidlist">
      <div className="content">
        <div className="k-title">가족 찾기</div>
        {children}
        <div className="k-list">
          {kids.map((kid) => (
            <KidCard kid={kid} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KidList;
