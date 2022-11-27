import React from "react";

const Hangmanword = ({ lettersGussed, wordToguess }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "4rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
        marginTop: "1rem",
      }}
    >
      {wordToguess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: ".1em solid" }}>
          <span
            style={{
              visibility: lettersGussed.includes(letter) ? "visible" : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Hangmanword;
