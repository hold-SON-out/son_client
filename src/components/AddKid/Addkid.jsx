import React from "react";
import "./AddKid.css";

const Addkid = ({ file }) => {
  return (
    <div className="addkid">
      <div className="content">
        <div className="a-form">
          <input
            id="a-file"
            {...file}
            style={{ display: "none" }}
            type="file"
          />
          <label className="a-f-file" htmlFor="a-file">
            사진
          </label>
          <input className="a-f-name" type="text" placeholder="이름" />
          <input className="a-f-birth" type="date" placeholder="이름" />
          <select className="a-f-blood">
            <option value={null}>혈액형</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
            <option value="O">O</option>
          </select>
          <select className="a-f-sex">
            <option value={null}>성별</option>
            <option value="남자">남성</option>
            <option value="여자">여성</option>
          </select>
          <input className="a-f-age" type="text" placeholder="나이" />
          <input className="a-f-height" type="text" placeholder="신장" />
          <input className="a-f-weight" type="text" placeholder="몸무게" />
          <input
            className="a-f-Uniqueness"
            type="text"
            placeholder="특이사항"
          />
          <textarea className="a-f-Introduce" placeholder="자기소개"></textarea>
          <button className="a-f-button">제출하기</button>
        </div>
      </div>
    </div>
  );
};

export default Addkid;
