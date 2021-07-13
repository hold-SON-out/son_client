import React from "react";
import male from "../../assets/images/male.png";
import house from "../../assets/images/orphanage.png";
import earth from "../../assets/images/worldwide.png";
import "./Detail.css";
const Detail = () => {
  return (
    <>
      <div className="content">
        <div className="Detail">
          <div className="Detail-Main">
            <div className="img-name">
              <img
                className="babyFaceImg"
                src="https://i.ytimg.com/vi/ERAMkP92arE/maxresdefault.jpg"
                style={{ width: "350px", height: "466px", objectFit: "cover" }}
              />
              <div className="Detail-Name">이민욱</div>
            </div>
            <div className="Detail-Main-Div">
              <div className="Detail-Main-options">
                <div className="Detail-options-form">
                  <div className="Detail-Main-options-name">이름: 이민욱</div>
                  <div className="Detail-Main-options-ageBirth">
                    <div className="Detail-age">나이:18세</div>
                    <div className="Detail-Birth">(2004-02-14)</div>
                  </div>
                  <div className="Detail-Main-options-sexBlood">
                    <div className="Detail-sex">
                      성별:
                      <img src={male} style={{ width: "25px" }} />
                    </div>
                    <div className="Detail-Blood">혈액형: AB</div>
                  </div>
                  <div className="Detail-Main-options-heightWeight">
                    <div className="Detail-height">키: 176cm</div>
                    <div className="Detail-Weight">몸무게: 96kg</div>
                  </div>
                  <div className="Detail-Main-options-specialNote">
                    특이사항:없음
                  </div>
                </div>
              </div>
              <div className="Detail-nav">
                <div className="Detail-nav-area">
                  <img
                    className="earthImg"
                    src={earth}
                    style={{ width: "30px", height: "30px" }}
                  />
                  대구광역시
                </div>
                <div className="Detail-nav-agency">
                  <img
                    className="Detail-towerImg"
                    src={house}
                    style={{ width: "30px", height: "30px" }}
                  />
                  대구보육원
                </div>
              </div>
              <div className="Detail-text">귀여운 아이입니다</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
