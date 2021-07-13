import React from "react";
import { Link } from "react-router-dom";
import "./Search.css";

const Search = ({ searcher, searchValue }) => {
  return (
    <div className="search">
      <div className="s-form">
        <select className="s-select" {...searcher}>
          <option value="이름">이름</option>
          <option value="나이">나이</option>
          <option value="성별">성별</option>
          <option value="지역">지역</option>
        </select>
        <input
          className="s-input"
          placeholder="검색할 내용을 입력하세요"
          type="text"
          {...searchValue}
        />
        <button className="s-button">검색하기</button>
      </div>
    </div>
  );
};

export default Search;
