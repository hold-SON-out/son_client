import React from "react";
import useInput from "../../Hooks/useInput";
import "./Login.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import AuthApi from "../../assets/api/AuthApi";
import { useHistory } from "react-router-dom";

const Login = () => {
  const id = useInput("");
  const password = useInput("");
  const history = useHistory();
  const TryLogin = async () => {
    console.log("ads");
    try {
      if (!id.value || !password.value) {
        alert("아이디 또는 비밀번호를 입력하지 않았습니다.");
      } else {
        const response = await AuthApi.Login(id.value, password.value);
        console.log(response.data);

        if (response.data.status === "OK") {
          localStorage.setItem("accessToken", response.data.data.accessToken);
          history.push("/main");
          alert("로그인을 성공하셨습니다");
        }
      }
    } catch (err) {
      console.log(err.response.status);
      err.response.status === 400 && alert("로그인을 실패하셨습니다");
    }
  };
  return (
    <>
      <div className="signIn">
        <div className="signIn-form">
          <div className="signIn-form-title">
            <Link className="signIn-form-title-Link" to="/main">
              <img style={{ width: "350px" }} src={Logo} alt="" />
            </Link>
          </div>
          <div className="signIn-form-title-subtitle">
            SON에서 아이를 찾아보세요
          </div>
          <div className="signIn-input">
            <div>
              <input
                className="signIn-input-item"
                type="text"
                name="email"
                placeholder="아이디"
                {...id}
              ></input>
            </div>
            <div
              className="errorMessage"
              name="errorDiv"
              style={{ display: "none" }}
            >
              아이디를 입력해주세요
            </div>
            <div>
              <input
                className="signIn-input-item"
                type="password"
                name="userPw"
                placeholder="비밀번호"
                {...password}
              />
            </div>
            <div
              className="errorMessage"
              name="errorDiv"
              style={{ display: "none" }}
            >
              비밀번호를 입력해주세요
            </div>
            <div
              className="errorMessage"
              name="errorDiv"
              style={{ display: "none" }}
            >
              가입하지 않은 아이디이거나,잘못된 비밀번호입니다.
            </div>
            <div className="signIn-submit" onClick={TryLogin}>
              로그인
            </div>
            <div className="another-approach">
              <span className="another-approach-item">
                아직 계정이 없으신가요?{" "}
                <Link className="another-approach-item-Link" to="/signUp">
                  회원가입
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
