import { useState } from "react";

export default function useHandle(initialState) {
  const [value, setValue] = useState(initialState);
  const handleChange = (event) => {
    const { value, name } = event.target;
    setValue(value, name);
  };
  return [value, handleChange];
}
