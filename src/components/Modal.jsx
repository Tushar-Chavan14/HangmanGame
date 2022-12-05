import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import style from "./keyboard.module.css";

Modal.setAppElement("#root");

const Cmodal = ({ isLosser, isWinner, hintLimit, sethintLimit }) => {
  const [close, setclose] = useState(false);

  useEffect(() => {
    if (isLosser || isWinner || hintLimit) {
      setclose(true);
    }
    return () => {
      return;
    };
  }, [isLosser, isWinner, hintLimit]);

  return (
    <div>
      <Modal
        isOpen={close}
        // onRequestClose={() => setclose((pre) => !pre)} // overlay tap modal close
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.9)" },
          content: {
            color: "#f9f9f9",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            height: "250px",
            textAlign: "center",
            backgroundColor: "#1d2025",
            borderRadius: "10px",
            border: "none",
          },
        }}
      >
        <h1>Hangman</h1>
        {isWinner && (
          <>
            <h2 style={{ marginTop: "3rem" }}>Hurray</h2>
            <p>You made it!</p>
          </>
        )}
        {isLosser && (
          <>
            <h2 style={{ marginTop: "3rem" }}>"Badluck"</h2>
            <p>Try again</p>
          </>
        )}

        {hintLimit && (
          <>
            <h2 style={{ marginTop: "3rem" }}>"Hint limit"</h2>
            <p>Reached</p>

            <button
              onClick={() => {
                setclose((prev) => !prev);
                sethintLimit((prev) => !prev);
              }}
              className={style.btn}
              style={{ margin: "1rem" }}
            >
              close
            </button>
          </>
        )}

        <button
          onClick={() => {
            location.reload();
          }}
          className={style.btn}
          style={{ margin: "1rem" }}
        >
          restart
        </button>
      </Modal>
    </div>
  );
};

export default Cmodal;
