import React from "react";
import search from "../../assets/images/magnifying-glass.png";
import message from "../../assets/images/message.png";
import user from "../../assets/images/user.png";
import "./CommunityCard.css";
const CommunityCard = ({ card }) => {
  console.log(card);
  return (
    <>
      <div className="communityProject">
        <div className="communityHeader">
          <div className="communityTitle">
            <div className="communityTitle-title">{card.title}</div>
            <div className="communityName">{card.user.name}</div>
          </div>
          <div className="communityContent">{card.content}</div>
        </div>
        <div className="communityNav">
          <img
            src={message}
            style={{ width: "20px", height: "20px", paddingRight: "5px" }}
          />
          <div className="communityNavText">댓글달기</div>
        </div>
        <div className="communityText">
          <div className="communityText-optionsForm">
            <div className="communityText-options">
              <div className="communityText-name">이름</div>
              <div className="communityText-text">
                이 아이가 배가 부르다는 느낌을 알까요?
              </div>
            </div>
            <div className="communityText-time">3시간 전</div>
          </div>
        </div>
        <div className="communityTextInput">
          <img
            src={user}
            style={{ width: "30px", height: "30px", paddingRight: "5px" }}
          />
          <input className="communityTextInput-Input" type="text" />
        </div>
      </div>
    </>
  );
};

export default CommunityCard;
