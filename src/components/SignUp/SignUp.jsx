import React from "react";
import "./SignUp.css";
const SignUp = () => {
  return (
    <>
      <div className="signUp">
        <div className="signUp-form">
          <div className="signUp-form-title">
            <Link className="signUp-form-title-link" to="/">
              SON을 내밀다
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
            />
            <div className="signUp-form-input-title">비밀번호 확인</div>
            <input
              className="signUp-form-input-item"
              type="text"
              placeholder="비밀번호 확인"
            />
            <div className="signUp-form-input-title">이름</div>
            <input
              className="signUp-form-input-item"
              type="text"
              placeholder="이름"
            />
          </div>
          <div className="signUp-form-button">
            <button className="signUp-form-button-item" onClick={handleSignUp}>
              회원가입
            </button>
          </div>
          <div className="signUp-form-signIn">
            <span className="signUp-form-signIn-item">
              이미 계정이 있으신가요?{" "}
              <Link className="signUp-form-signIn-itme-after" to="/signIn">
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
