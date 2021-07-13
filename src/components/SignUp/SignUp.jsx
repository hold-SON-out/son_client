import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import useInput from "../../Hooks/useInput";
import AuthApi from "../../assets/api/AuthApi";
const SignUp = (ChangePurposeAdopted, ChangePurposeAdopting, purpose) => {
  const id = useInput("");
  const password = useInput("");
  const checkPassword = useInput("");
  const name = useInput("");

  const trySignUp = async () => {
    try {
      if (!id || !password || !checkPassword || !name) {
        alert("입력하지 않은 칸이 존재합니다");
      }
      const response = AuthApi.SignUp(
        id.value,
        password.value,
        name.value,
        purpose
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="signUp">
        <div className="signUp-form">
          <div className="signUp-form-title">
            <Link className="signUp-form-title-link" to="/main">
              <img src={Logo} style={{ width: "350px" }} />
            </Link>
            <div className="signUp-form-title-Subtitle">
              SON에서 아이를 찾아보세요
            </div>
          </div>
          <div className="signUp-form-input">
            <div className="signUp-form-input-title">이메일</div>
            <div className="signUp-form-input-email">
              <input
                className="signUp-form-input-item email-input"
                type="text"
                placeholder="아이디"
                {...id}
              />
              <div className="signUp-form-input-button">
                <button className="signUp-form-input-button-item email-button">
                  중복확인
                </button>
              </div>
            </div>
            <div className="signUp-form-input-title">비밀번호</div>
            <input
              className="signUp-form-input-item"
              type="text"
              placeholder="비밀번호"
              {...password}
            />
            <div className="signUp-form-input-title">비밀번호 확인</div>
            <input
              className="signUp-form-input-item"
              type="text"
              placeholder="비밀번호 확인"
              {...checkPassword}
            />
            <div className="signUp-form-input-title">이름</div>
            <div className="signUp-form-input-item-lastBox">
              <input
                className="signUp-form-input-item name"
                type="text"
                placeholder="이름"
                {...name}
              />
              <div className="Adopted-person" onClick={ChangePurposeAdopting}>
                입양자
              </div>
              <div className="Institution" onClick={ChangePurposeAdopted}>
                기관
              </div>
            </div>
          </div>
          <div className="signUp-form-button">
            <button className="signUp-form-button-item">회원가입</button>
          </div>
          <div className="signUp-form-signIn">
            <span className="signUp-form-signIn-item">
              이미 계정이 있으신가요?{" "}
              <Link className="signUp-form-signIn-itme-after" to="/">
                로그인
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
