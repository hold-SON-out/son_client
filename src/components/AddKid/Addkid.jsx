import React from "react";
import "./AddKid.css";

const Addkid = ({
  handleImageChange,
  preview,
  name,
  age,
  sex,
  birth,
  bloodType,
  height,
  weight,
  introduce,
  agencyUrl,
  tryAddSubmit,
}) => {
  return (
    <div className="addkid">
      <div className="content">
        <div className="a-form">
          <input
            id="a-file"
            onChange={handleImageChange}
            style={{ display: "none" }}
            type="file"
          />
          <label className="a-f-file" htmlFor="a-file">
            {preview ? (
              <img className="a-f-f-image" src={preview.toString()} alt="" />
            ) : (
              <div>사진</div>
            )}
          </label>
          <input
            className="a-f-name"
            type="text"
            placeholder="이름"
            {...name}
          />
          <input
            className="a-f-birth"
            type="date"
            placeholder="이름"
            {...birth}
          />
          <select className="a-f-blood" {...bloodType}>
            <option value={null}>혈액형</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
            <option value="O">O</option>
          </select>
          <select className="a-f-sex" {...sex}>
            <option value={null}>성별</option>
            <option value="M">남성</option>
            <option value="W">여성</option>
          </select>
          <input className="a-f-age" type="text" placeholder="나이" {...age} />
          <input
            className="a-f-height"
            type="text"
            placeholder="신장"
            {...height}
          />
          <input
            className="a-f-weight"
            type="text"
            placeholder="몸무게"
            {...weight}
          />
          <input
            className="a-f-Uniqueness"
            type="text"
            placeholder="보육원 홈페이지 url"
            {...agencyUrl}
          />
          <textarea
            className="a-f-Introduce"
            placeholder="자기소개"
            {...introduce}
          ></textarea>
          <button className="a-f-button" onClick={tryAddSubmit}>
            제출하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addkid;
