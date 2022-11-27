import React from "react";

const Head = () => {
  return (
    <div
      name="man head"
      style={{
        position: "absolute",
        height: "50px",
        width: "50px",
        top: "2.5rem",
        left: "215px",
        borderRadius: "50%",
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: "0.4rem",
      }}
    />
  );
};

const Body = () => {
  return (
    <div
      name="man stick"
      style={{
        position: "absolute",
        height: "90px",
        width: "0.4rem",
        left: "245px",
        top: "6.0rem",
        background: "white",
      }}
    />
  );
};

const HandRight = () => {
  return (
    <div
      name="man right hand"
      style={{
        position: "absolute",
        height: "60px",
        width: "0.4rem",
        left: "265px",
        top: "6.5rem",
        background: "white",
        transform: "rotate(-135deg)",
      }}
    />
  );
};

const HandLeft = () => {
  return (
    <div
      name="man left hand"
      style={{
        position: "absolute",
        height: "60px",
        width: "0.4rem",
        left: "225px",
        top: "6.5rem",
        background: "white",
        transform: "rotate(135deg)",
      }}
    />
  );
};

const LegRight = () => {
  return (
    <div
      name="man right leg"
      style={{
        position: "absolute",
        height: "60px",
        width: "0.4rem",
        left: "265px",
        top: "11.0rem",
        background: "white",
        transform: "rotate(-40deg)",
      }}
    />
  );
};

const LegLeft = () => {
  return (
    <div
      name="man left leg"
      style={{
        position: "absolute",
        height: "60px",
        width: "0.4rem",
        left: "225px",
        top: "11.0rem",
        background: "white",
        transform: "rotate(40deg)",
      }}
    />
  );
};

const bodyParts = [
  <Head />,
  <Body />,
  <HandRight />,
  <HandLeft />,
  <LegRight />,
  <LegLeft />,
];

const Hangmandrawing = ({ incorrectguess }) => {
  return (
    <div style={{ position: "relative" }}>
      <div
        name="hangstick"
        style={{
          position: "absolute",
          height: "40px",
          width: "0.5rem",
          marginLeft: "240px",
          background: "white",
        }}
      />
      {bodyParts.slice(0, incorrectguess).map((Compo, index) => (
        <div key={index}>{Compo}</div>
      ))}

      <div
        name="side hang stik"
        style={{
          height: "0.5rem",
          width: "120px",
          marginLeft: "120px",
          background: "white",
        }}
      />
      <div
        name="pole"
        style={{
          height: "20rem",
          width: "0.5rem",
          marginLeft: "120px",
          background: "white",
        }}
      />
      <div
        name="base"
        style={{ height: "0.5rem", width: "250px", background: "white" }}
      />
    </div>
  );
};

export default Hangmandrawing;
