import React from "react";
import "./Low.css";
import Right from "../../assets/images/RightArrow.png";
import Left from "../../assets/images/LeftArrow.png";
import Bottom from "../../assets/images/BottomArrow.png";
const Low = () => {
  return (
    <>
      <div className="content">
        <div className="low">
          <div className="lowTitle">국내입양 절차</div>
          <div className="lowSubTitle">
            ※ 구비서류는 입양기관에 따라 차이가 있을 수 있음
          </div>
          <div className="low-Card-Tag">
            <div className="low-Card">
              <div className="low-Title">01. 입양신청 및 서류접수</div>
              <div className="low-content">
                ※ 입양기관에 양친가정 조사신청서 제출 <br />
                &lt;구비서류&gt; <br />
                1. 양친가정조사신청서(별지 제6호 서식)
                <br />
                2. 가족관계증명서 <br />
                3. 혼인관계증명서 <br />
                4. 주민등록등본
              </div>
            </div>
            <div className="rowArrow">
              <img
                style={{ width: "50px", height: "50px" }}
                src={Right}
                alt=""
              />
            </div>
            <div className="low-Card">
              <div className="low-Title">02. 양친 가정조사</div>
              <div className="low-content">
                - 가정조사 실시 (입양기관 사회복지사의방문·조사 2회이상)
                <br />
                - 예비양부모 교육 : 보건복지부령으로 정하는 소정의 교육이수
                <br /> (별지 제1호 양친교육 이수 증명서 발급)
                <br />※ 상황에 따라 순서 변동 가능
              </div>
            </div>
          </div>
          <div className="tagArrowFirst">
            <img
              style={{ width: "50px", height: "50px" }}
              src={Bottom}
              alt=""
            />
          </div>
          <div className="low-Card-Tag">
            <div className="low-Card">
              <div className="low-Title">04. 결연</div>
              <div className="low-content">
                - 입양대상 아동과 이에 접합한 예비 양부모 결연
              </div>
            </div>
            <div className="rowArrow">
              <img
                style={{ width: "50px", height: "50px" }}
                src={Left}
                alt=""
              />
            </div>
            <div className="low-Card">
              <div className="low-Title">03. 양친가정조사서 발급</div>
              <div className="low-content">
                - 양친가정조사서 작성 (입양기관/별지 제7호 서식)
                <br />- 신청인에게 양친가정조사서 발급 (입양기관)
              </div>
            </div>
          </div>
          <div className="tagArrow">
            <img
              style={{ width: "50px", height: "50px" }}
              src={Bottom}
              alt=""
            />
          </div>
          <div className="low-Card-Tag">
            <div className="low-Card">
              <div className="low-Title">05. 가정법원에 입양서류 제출</div>
              <div className="low-content">
                ※ 가정법원에 입양허가 신청 <br />
                &lt;구비서류&gt; <br />
                1. 입양허가신청서
                <br /> 2. 신청관련사항목록 <br />
                3. 기본증명서, 가족관계증명서, 주민등록등본 (사건본인)
                <br /> 4. 기본증명서, 혼인관계증명서, 가족관계증명서,
                주민등록등본
                <br />
                (청구인들) <br />
                5. 입양대상아동 확인서
                <br /> 6. 양친될 사람의 범죄경력조회 회보 <br />
                7. 양친가정조사서 <br />
                8. 양친될 사람의 교육이수증명서 <br />
                9. 입양동의서
              </div>
            </div>
            <div className="rowArrow">
              <img
                style={{ width: "50px", height: "50px" }}
                src={Right}
                alt=""
              />
            </div>
            <div className="low-Card">
              <div className="low-Title">06. 입양의 허가</div>
              <div className="low-content">
                - 가정법원의 인용심판 확정으로 입양허가
              </div>
            </div>
          </div>
          <div className="tagArrowFirst">
            <img
              style={{ width: "50px", height: "50px" }}
              src={Bottom}
              alt=""
            />
          </div>
          <div className="low-Card-Tag">
            <div className="low-Card">
              <div className="low-Title">08. 입양신고</div>
              <div className="low-content">
                - 가정법원의 허가서를 첨부하여 가족관계 등록 등에 관한 <br />
                법률에 정하는 바에 따라 친양자 입양신고 (친양자 입양신고서 작성)
              </div>
            </div>
            <div className="rowArrow">
              <img
                style={{ width: "50px", height: "50px" }}
                src={Left}
                alt=""
              />
            </div>
            <div className="low-Card">
              <div className="low-Title">07. 입양&아동의 인도</div>
              <div className="low-content">
                {" "}
                가정법원의 입양허가가 결정된 후 아동을 양부모에게 인도
                <br /> ※ 인도시 아동관련 기록 및 물품 전달
              </div>
            </div>
          </div>
          <div className="tagArrow">
            <img
              style={{ width: "50px", height: "50px" }}
              src={Bottom}
              alt=""
            />
          </div>
          <div className="low-Card-Tag">
            <div className="low-Card">
              <div className="low-Title">09. 사후관리</div>
              <div className="low-content">
                입양 성립 이후 입양기관은 1년 동안 양친과 양자의 상호적응을{" "}
                <br />
                위하여 사후서비스를 제공하여야 함
              </div>
            </div>
          </div>
          <div className="lowQualification">
            <div className="lowQualification-title">입양자격</div>
            <div className="lowQualification-subTitle">
              ※ 초기상담 시 구비서류 (원본, 6개월 이내의 서류. 단, 건강진단서
              3개월 이내)
            </div>
            <div className="lowQualification-box">
              - 25세 이상이며 아동과의 연령차이가 60세 이내로
              <br />
              - 양자를 부양하기에 충분한 재산이 있어야 하고
              <br />
              - 양자가 될 아동이 복리에 반하는 직업이나 그 밖에 인권침해의
              우려가 있는 직업에 종사하지 아니하고
              <br />
              - 양자에 대하여 종교의 자유를 인정하고 사회의 구성원으로서 그에
              상응하는 양육과 교육을 할 수 있어야 하며
              <br />
              - 양친이 될 사람이 아동학대, 가정폭력, 성폭력, 마약 등의 범죄나
              알코올 등 약물중독의 경력이 없어야 함<br />- 또한, 양친이 되려는
              사람은 입양의 성립 전에 입양기관 등으로부터 보건복지부령으로
              정하는 소정의 교육을 마쳐야 함
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Low;
