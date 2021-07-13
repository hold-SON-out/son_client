import { useState } from "react";

const useScroll = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onScroll = () => {
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;
    setValue(scrollTop < scrollHeight / 150);
  };
  const onClick = () => {
    setValue(!value);
  };
  return { value, onScroll, onClick };
};

export default useScroll;
