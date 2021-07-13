import { useState } from "react";

const useScroll = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onScroll = () => {
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;
    console.log(scrollTop, scrollHeight / 300);
    setValue(scrollTop < scrollHeight / 150);
  };
  return { value, onScroll };
};

export default useScroll;
