import React, { useState, useEffect } from "react";
import { Slogan } from "../../model/Slogan";

const Slogans = () => {
  const [random, setRandom] = useState(-1);
  useEffect(() => {
    setRandom(Math.floor(Math.random() * (5 - 0 + 1)) + 0);
  }, []);

  return (
    random !== -1 && (
      <div style={{ textAlign: "end" }} className="slogan">
        {Slogan[random]}
      </div>
    )
  );
};

export default Slogans;
