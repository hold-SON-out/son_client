import React from "react";
import { useState } from "react";
import SignUp from "../../components/SignUp/SignUp";

const SignUpPage = () => {
  const [purpose, setPurpose] = useState("ADOPTING");
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState(false);
  const ChangePurposeAdopting = () => {
    setPurpose("ADOPTING");
  };

  const ChangePurposeAdopted = () => {
    setPurpose("ADOPTED");
  };

  return (
    <>
      <SignUp
        ChangePurposeAdopted={ChangePurposeAdopted}
        ChangePurposeAdopting={ChangePurposeAdopting}
        purpose={purpose}
        show={show}
        setShow={setShow}
        check={check}
        setCheck={setCheck}
      />
    </>
  );
};

export default SignUpPage;
