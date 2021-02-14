import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });

  const handler  = (event)=>{
    let left1 = Number(ballPosition.left.slice(0,-2));
    let top1 = Number(ballPosition.top.slice(0,-2));
      switch(event.keyCode){
        case 39:
          setBallPosition({
            left: `${left1 + 5}px`,
            top : `${top1}px`,
          });
          break;
        case 40:
          setBallPosition({
            left: `${left1}px`,
            top : `${top1+5}px`,
          });
          break;
        case 38:
          setBallPosition({
            left: `${left1}px`,
            top : `${top1-5}px`,
          });
          break;
        case 37:
          setBallPosition({
            left: `${left1 - 5}px`,
            top : `${top1}px`,
          });
           break;
        default:
           break;
      }
      console.log(ballPosition.left,ballPosition.top);
    };


  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    }
  }, [ballPosition]);
  const buttonClickHandler = () => {
    setRenderBall(true);
  };
  const reset = () => {
    setBallPosition({
            left: `0px`,
            top : `0px`,
          });
    setRenderBall(false);
  };
  const renderChoice = () => {
    if(renderBall) {
      return <div 
                className = "ball"
                style = {{
                  left : ballPosition.left,
                  top : ballPosition.top,
                  position :"absolute"
                }}

            ></div>
    }else{
      return <button className = "start" onClick={buttonClickHandler}>Play</button>
    }
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
