import axios from "axios";
import React, { useState } from "react";

export const TextBox = () => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = async () => {
    const response = await axios.get(`http://localhost:5000/${inputValue}`);
    const gptOutput = response.data.choices[0].message.content;
    console.log(gptOutput);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};
