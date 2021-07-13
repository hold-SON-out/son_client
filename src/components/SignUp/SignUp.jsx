import React from "react";
import "./SignUP.css";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import useInput from "../../Hooks/useInput";
import AuthApi from "../../assets/api/AuthApi";
import { useEffect } from "react";

const SignUp = ({
  ChangePurposeAdopted,
  ChangePurposeAdopting,
  purpose,
  show,
  setShow,
  check,
  setCheck,
}) => {
  const id = useInput(null);
  const password = useInput(null);
  const checkPassword = useInput(null);
  const name = useInput(null);
  const agency = useInput(null);
  const area = useInput(null);
  const history = useHistory();

  useEffect(() => {
    onChangeCheckPassword();
  });

  const onChangeCheckPassword = () => {
    if (password.value === checkPassword.value) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const tryCheckId = async () => {
    try {
      if (!id.value) {
        alert("아이디를 입력하지 않았습니다");
      } else {
        const response = await AuthApi.CheckId(id.value);
        console.log(response);
        if (response.data.data === "사용 가능한 아이디입니다.") {
          alert("사용 가능한 아이디입니다.");
          setCheck(true);
        } else {
          alert("사용 불가능한 아이디입니다.");
          setCheck(false);
        }
      }
    } catch (e) {
      e.response.status === 400 && alert("사용 불가능한 아이디입니다");
    }
  };
  const trySignUp = async () => {
    try {
      if (show === false) {
        alert("비밀번호가 일치하지 않습니다");
      } else if (check === false) {
        alert("아이디 중복확인을 하시거나 사용 불가능한 아이디입니다.");
      } else if (purpose === "ADOPTING") {
        if (
          !id.value ||
          !password.value ||
          !checkPassword.value ||
          !name.value
        ) {
          alert("입력하지 않은 칸이 존재합니다");
        } else {
          const response = await AuthApi.SignUp(
            id.value,
            password.value,
            name.value,
            purpose
          );
          alert("회원가입 완료되었습니다");
          history.push("/");
        }
      } else {
        if (
          !id.value ||
          !password.value ||
          !checkPassword.value ||
          !name.value ||
          !agency.value ||
          !area.value
        ) {
          alert("입력하지 않은 칸이 존재합니다");
        } else {
          const response = await AuthApi.SignUp(
            id.value,
            password.value,
            name.value,
            purpose,
            agency.value,
            area.value
          );
          console.log(response);
          alert("회원가입 완료되었습니다");
          history.push("/");
        }
      }
    } catch (e) {
      e.response.status === 400 && alert("회원가입에 실패하였습니다");
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
            <div className="signUp-form-input-title">아이디</div>
            <div className="signUp-form-input-email">
              <input
                className="signUp-form-input-item email-input"
                type="text"
                placeholder="아이디"
                {...id}
              />
              <div className="signUp-form-input-button">
                <button
                  className="signUp-form-input-button-item email-button"
                  onClick={tryCheckId}
                >
                  중복확인
                </button>
              </div>
            </div>
            <div className="signUp-form-input-title">비밀번호</div>
            <input
              className="signUp-form-input-item"
              type="password"
              placeholder="비밀번호"
              {...password}
            />
            <div className="passwordCheck">
              <div className="signUp-form-input-title">비밀번호 확인</div>
              <input
                className="signUp-form-input-item-check"
                type="password"
                placeholder="비밀번호 확인"
                {...checkPassword}
              />
              {show === false && (
                <div className="errorMessage" name="errorDiv">
                  비밀번호가 일치하지 않습니다.
                </div>
              )}
            </div>
            <div className="signUp-form-input-title">이름</div>
            <div className="signUp-form-input-item-lastBox">
              <input
                className="signUp-form-input-item name"
                type="text"
                placeholder="이름"
                {...name}
              />
              <div
                className={
                  purpose === "ADOPTING"
                    ? "Adopted-person check"
                    : "Adopted-person"
                }
                onClick={ChangePurposeAdopting}
              >
                입양자
              </div>
              <div
                className={
                  purpose === "ADOPTED" ? "Institution check" : "Institution"
                }
                onClick={ChangePurposeAdopted}
              >
                기관
              </div>
            </div>
            {purpose === "ADOPTED" && (
              <div>
                <div className="signUp-form-input-title">기관명</div>
                <input
                  type="text"
                  placeholder="보육원 이름"
                  className="signUp-form-input-item"
                  {...agency}
                />
                <div className="signUp-form-input-title">지역</div>
                <input
                  type="text"
                  placeholder="해당 지역"
                  className="signUp-form-input-item"
                  {...area}
                />
              </div>
            )}
          </div>
          <div className="signUp-form-button">
            <button className="signUp-form-button-item" onClick={trySignUp}>
              회원가입
            </button>
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
