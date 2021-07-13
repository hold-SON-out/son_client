import React from "react";
import { useState } from "react";
import SignUp from "../../components/SignUp/SignUp";

const SignUpPage = () => {
  const [purpose, setPurpose] = useState("ADOPTING");
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
      />
    </>
  );
};

export default SignUpPage;
