import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import style from "./keyboard.module.css";

Modal.setAppElement("#root");

const Cmodal = ({ isLosser, isWinner }) => {
  const [close, setclose] = useState(false);

  useEffect(() => {
    if (isLosser || isWinner) {
      setclose(true);
    }
    return () => {};
  }, [isLosser, isWinner]);

  return (
    <div>
      <Modal
        isOpen={close}
        onRequestClose={() => setclose((pre) => !pre)}
        style={{
          overlay: { backgroundColor: "grey" },
          content: {
            color: "black",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            height: "250px",
            textAlign: "center",
            backgroundColor: "#D6E4E5",
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
