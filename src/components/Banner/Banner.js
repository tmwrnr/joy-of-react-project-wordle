import React from "react";

function Banner({ type, children, onRestart }) {
  return (
    <div className={`${type} banner`}>
      <div>{children}</div>
      <button onClick={onRestart}>Restart Game</button>
    </div>
  );
}

export default Banner;
