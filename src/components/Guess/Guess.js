import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const cells = range(5);

  return (
    <p className="guess">
      {cells.map((cell) => (
        <Cell key={cell} {...guess?.result[cell]} />
      ))}
    </p>
  );
}

function Cell({ letter = "", status = "" }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}

export default Guess;
