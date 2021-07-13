import React, { useState, useEffect } from "react";
import Addkid from "../../components/AddKid/Addkid";
import Header from "../../components/Header/Header";
import useInput from "../../Hooks/useInput";

const AddKidPage = () => {
  const file = useInput(null);
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState();
  const [isChanged, setIsChanged] = useState(false);

  const handleImageChange = e => {
    let reader = new FileReader();
    if (e.target.files && e.target.files.length) {
      let file = e.target.files[0];
      reader.onloadend = () => {
        setImage(file);
        setPreview(reader.result);
        setIsChanged(true);
      };
      console.log(reader.result, image, isChanged);
      reader.readAsDataURL(file);
    } else {
      setPreview("");
    }
  };

  useEffect(() => {
    console.log(file.value);
  }, []);

  return (
    <div>
      <Header />
      <Addkid handleImageChange={handleImageChange} preview={preview} />
    </div>
  );
};

export default AddKidPage;
