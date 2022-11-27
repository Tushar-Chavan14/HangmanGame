import React from "react";
import alpha from "../albha.json";
import style from "./keyboard.module.css";

const Keyboard = ({ setlettersGussed, inActive }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr))",
        gap: "1rem",
      }}
    >
      {alpha.map((letter, index) => {
        const isInActive = inActive.includes(letter);
        return (
          <button
            className={style.btn}
            key={index}
            onClick={() => {
              setlettersGussed(letter);
            }}
            disabled={isInActive}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
