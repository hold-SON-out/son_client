import React from "react";
import male from "../../assets/images/male.png";
import woman from "../../assets/images/woman.png";
import house from "../../assets/images/orphanage.png";
import earth from "../../assets/images/worldwide.png";
import "./Detail.css";
const Detail = ({ kid }) => {
  console.log(kid);
  return (
    <>
      <div className="content">
        <div className="Detail">
          <div className="Detail-Main">
            <div className="img-name">
              <img
                className="babyFaceImg"
                src={kid.file.fileLocation}
                style={{ width: "350px", height: "466px", objectFit: "cover" }}
                alt=""
              />
              <div className="Detail-Name">{kid.name}</div>
            </div>
            <div className="Detail-Main-Div">
              <div className="Detail-Main-options">
                <div className="Detail-options-form">
                  <div className="Detail-Main-options-name">
                    이름: {kid.name}
                  </div>
                  <div className="Detail-Main-options-ageBirth">
                    <div className="Detail-age">나이:{kid.age}</div>
                    <div className="Detail-Birth">({kid.birth})</div>
                  </div>
                  <div className="Detail-Main-options-sexBlood">
                    <div className="Detail-sex">
                      성별:
                      {kid.sex === "W" ? (
                        <img src={woman} style={{ width: "25px" }} alt="" />
                      ) : (
                        <img src={male} style={{ width: "25px" }} alt="" />
                      )}
                    </div>
                    <div className="Detail-Blood">혈액형: {kid.bloodType}</div>
                  </div>
                  <div className="Detail-Main-options-heightWeight">
                    <div className="Detail-height">키: {kid.height}</div>
                    <div className="Detail-Weight">몸무게: {kid.weight}</div>
                  </div>
                </div>
              </div>
              <div className="Detail-nav">
                <div className="Detail-nav-area">
                  <img
                    className="earthImg"
                    src={earth}
                    alt=""
                    style={{ width: "30px", height: "30px" }}
                  />
                  {kid.area}
                </div>
                <a href={kid.agencyUrl} className="Detail-nav-agency">
                  <img
                    className="Detail-towerImg"
                    src={house}
                    alt=""
                    style={{ width: "30px", height: "30px" }}
                  />
                  {kid.agency}
                </a>
              </div>
              <div className="Detail-text">{kid.introduce}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
