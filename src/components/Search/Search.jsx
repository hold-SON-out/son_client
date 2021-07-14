import React from "react";
import { Link } from "react-router-dom";
import Slogans from "../Slogans/Slogans";
import "./Search.css";

const Search = ({ searcher, searchValue, trySearcher }) => {
  return (
    <div className="search">
      <div className="s-form">
        <select className="s-select" {...searcher}>
          <option value="name">이름</option>
          <option value="age">나이</option>
          <option value="sex">성별</option>
          <option value="area">지역</option>
        </select>
        <input
          className="s-input"
          placeholder="검색할 내용을 입력하세요"
          type="text"
          {...searchValue}
        />
        <button className="s-button" onClick={trySearcher}>
          검색하기
        </button>
      </div>
      <Slogans />
    </div>
  );
};

export default Search;
