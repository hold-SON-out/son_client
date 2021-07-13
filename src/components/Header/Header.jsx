import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerContent">
      <div className="header">
        <Link to="/main">
          <img className="h-logo" src={logo} alt="" />
        </Link>
        <Link className="h-item" to="/kidList">
          가족 찾기
        </Link>
        <Link className="h-item" to="/communitymain">
          커뮤니티
        </Link>
        <Link className="h-item" to="/addKid">
          아이추가
        </Link>
        <Link className="h-item" to="/low">
          법적절차
        </Link>
      </div>
    </div>
  );
};

export default Header;
