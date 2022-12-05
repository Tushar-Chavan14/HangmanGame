import React, { useState } from "react";
import style from "./hint.module.css";

const Hint = ({ word, setHintedLetter, sethintLimit }) => {
  const [count, setcount] = useState(0);

  console.log(count);

  const hintHandler = () => {
    if (count > 2) {
      sethintLimit(true);
      return;
    }
    setcount((prev) => prev + 1);

    if (count < 2) {
      const char = Math.floor(Math.random() * word.length);
      const hintLetter = word.charAt(char);
      setHintedLetter(hintLetter);
    }
  };

  return (
    <div onClick={hintHandler}>
      <i
        className={style.hint}
        style={{
          margin: "0",
          position: "relative",
          left: "40rem",
          verticalAlign: "middle",
          cursor: "help",
        }}
      >
        &#x1F9D0;
      </i>
      <span className={style.hintTxt}>Hint</span>
    </div>
  );
};

export default Hint;
