import "./styles.css";

// import React, { Component, useState } from "react";
// import "../styles/App.css";

// const App = () => {
//   const [renderBall, setRenderBall] = useState(false);  //*
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);
//   const [ballPosition,setBallPosition] = useState({
//     left: "0px",
//     top: "0px",
//   });
//   const reset = () => {};
//   const renderChoice = () => {};

//   return (
//     <div className="playground">
//       <button onClick={reset} className="reset">
//         Reset
//       </button>
//       {renderChoice()}
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";

const App = () => {
  const [renderBall, setRenderBall] = useState(false); //*

  const [ballPosition, setBallPosition] = useState({ left: 0, top: 0 });
  const updateXY = (x, y) => setBallPosition({ left: x, top: y });

  const handleListener = () => {
    switch (event.keyCode) {
      case 39:
        updateXY(ballPosition.left + 5, ballPosition.top);
        break;
      case 40:
        updateXY(ballPosition.left, ballPosition.top + 5);
        break;
      case 37:
        updateXY(ballPosition.left - 5, ballPosition.top);
        break;
      case 38:
        updateXY(ballPosition.left, ballPosition.top - 5);
        break;
      default:
        break;
    }
  };

  // bind ArrowRight keydown event
  useEffect(() => {
    const keyListener = document.addEventListener("keydown", handleListener);
    return () => document.removeEventListener("keydown", handleListener);
  }, [ballPosition]);

  const renderChoice = () => {
    setRenderBall(true);
  };
  const reset = () => {
    setRenderBall(false);
    setBallPosition({ left: 0, top: 0 });
  };

  const renderBallOrButton = () => {
    if (renderBall) {
      return (
        <>
          <div
            className="ball"
            style={{
              left: ballPosition.left + "px",
              top: ballPosition.top + "px",
              position: "absolute"
            }}
          ></div>
          <button className="reset" onClick={reset}>
            reset
          </button>
        </>
      );
    } else {
      return (
        <>
          <button className="start" onClick={renderChoice}>
            start
          </button>
          <button className="reset" onClick={reset}>
            reset
          </button>
        </>
      );
    }
  };

  return <div className="playground">{renderBallOrButton()}</div>;
};

export default App;
