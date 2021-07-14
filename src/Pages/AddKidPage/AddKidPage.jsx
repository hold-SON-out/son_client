import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { SERVER } from "../../config/config.json";
import axios from "axios";
import Addkid from "../../components/AddKid/Addkid";
import Header from "../../components/Header/Header";
import useInput from "../../Hooks/useInput";
import useSelect from "../../Hooks/useSelect";

const AddKidPage = () => {
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState();
  const [isChanged, setIsChanged] = useState(false);

  const history = useHistory();

  const goMain = () => {
    history.push("/main");
  };

  const name = useInput("");
  const age = useInput("");
  const sex = useSelect("");
  const birth = useInput("");
  const bloodType = useSelect("");
  const height = useInput("");
  const weight = useInput("");
  const introduce = useInput("");
  const agencyUrl = useInput("");

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

  const tryAddSubmit = async () => {
    const file = new FormData();
    file.append("file", image);
    file.append("name", name.value);
    file.append("age", age.value);
    file.append("sex", sex.value);
    file.append("birth", birth.value);
    file.append("bloodType", bloodType.value);
    file.append("height", height.value);
    file.append("weight", weight.value);
    file.append("introduce", introduce.value);
    file.append("agencyUrl", agencyUrl.value);
    try {
      await axios
        .post(SERVER + "/child", file, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
            ContentType: "multipart/form-data",
          },
        })
        .then(() => {
          goMain();
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <Addkid
        handleImageChange={handleImageChange}
        preview={preview}
        name={name}
        age={age}
        sex={sex}
        birth={birth}
        bloodType={bloodType}
        height={height}
        weight={weight}
        introduce={introduce}
        agencyUrl={agencyUrl}
        tryAddSubmit={tryAddSubmit}
      />
    </div>
  );
};

export default AddKidPage;
