import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerContent">
      <div className="header">
        <img className="h-logo" src={logo} alt="" />
        <Link className="h-item" to="/kidList">
          아이찾기
        </Link>
        <Link className="h-item" to="/kidList">
          아이찾기
        </Link>
        <Link className="h-item" to="/kidList">
          아이찾기
        </Link>
        <Link className="h-item" to="/kidList">
          아이찾기
        </Link>
      </div>
    </div>
  );
};

export default Header;
