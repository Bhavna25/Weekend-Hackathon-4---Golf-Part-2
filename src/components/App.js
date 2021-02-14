import React, { useState, useEffect } from "react";
// import "../styles/App.css";
import "./styles.css";
// import BallMove from "./BallMove";
export default function App() {
  const [timer, setTimer] = useState(0);
  let [interval, setInterval] = useState(0);
  const [ballPosition, setBallPosition] = useState({ left: 0, top: 0 });
  useEffect(() => {
    console.log("useEffect", ballPosition);
    console.log(interval);
    if (ballPosition.left === 250 && ballPosition.top === 250) {
      clearInterval(interval);
      document.removeEventListener("keydown", handleKey);
    }
  }, [ballPosition, interval]);
  const handleKey = (event) => {
    console.log("in func");
    switch (event.key) {
      case "ArrowRight":
        setBallPosition((ball) => ({
          left: ball.left + 5,
          top: ball.top
        }));
        break;
      case "ArrowDown":
        setBallPosition((ball) => ({
          // (console.log(ball))

          left: ball.left,
          top: ball.top + 5
        }));
        break;
      case "ArrowUp":
        setBallPosition((ball) => ({
          top: ball.top - 5,
          left: ball.left
        }));
        break;
      case "ArrowLeft":
        setBallPosition((ball) => ({
          left: ball.left - 5,
          top: ball.top
        }));
        break;
      default:
        break;
    }
  };

  const Onclick = () => {
    console.log(ballPosition, "fk");
    interval = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);
    console.log(interval, "in");
    document.addEventListener("keydown", handleKey);
    //  clearInterval(int);
    // console.log(int),"in";
  };

  const renderThings = () => {
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
        <button className="start" onClick={Onclick}>
          start
        </button>
        <div className="heading-timer">{timer}</div>
        <div className="hole"></div>
      </>
    );
  };

  return (
    <>
      <div className="main">{renderThings()}</div>
    </>
  );
}
