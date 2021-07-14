import React from "react";
import { useState } from "react/cjs/react.development";
import CommunityApi from "../../assets/api/CommunityApi";
import search from "../../assets/images/magnifying-glass.png";
import message from "../../assets/images/message.png";
import user from "../../assets/images/user.png";
import useInput from "../../Hooks/useInput";
import "./CommunityCard.css";
const CommunityCard = ({ card, setCommunityList }) => {
  console.log(card);
  const commentText = useInput("");
  const [input, setInput] = useState("");
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  const tryGetCommunityList = async () => {
    const { data } = await CommunityApi.GetCommunityList();
    console.log(data.data);
    setCommunityList(data.data);
  };
  const tryPostComment = async () => {
    const response = await CommunityApi.postComment(card.idx, input);
    if (response.status === 200) {
      await tryGetCommunityList();
      setInput("");
    }
  };

  const mapComment = card.comments.map((comment) => (
    <div className="communityText">
      <div className="communityText-optionsForm">
        <div className="communityText-options">
          <div className="communityText-name">{comment.name}</div>
          <div className="communityText-text">{comment.content}</div>
        </div>
      </div>
    </div>
  ));

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
        <div className="communityNav" onClick={tryPostComment}>
          <img
            src={message}
            style={{ width: "20px", height: "20px", paddingRight: "5px" }}
          />
          <div className="communityNavText">댓글달기</div>
        </div>
        {mapComment}
        <div className="communityTextInput">
          <img
            src={user}
            style={{ width: "30px", height: "30px", paddingRight: "5px" }}
          />
          <input
            className="communityTextInput-Input"
            type="text"
            onChange={onChangeInput}
            value={input}
          />
        </div>
      </div>
    </>
  );
};

export default CommunityCard;
