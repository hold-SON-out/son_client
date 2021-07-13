import React, { useEffect } from "react";
import Addkid from "../../components/AddKid/Addkid";
import Header from "../../components/Header/Header";
import useInput from "../../Hooks/useInput";

const AddKidPage = () => {
  const file = useInput(null);
  useEffect(() => {
    console.log(file.value);
  }, []);
  return (
    <div>
      <Header />
      <Addkid file={file} />
    </div>
  );
};

export default AddKidPage;
