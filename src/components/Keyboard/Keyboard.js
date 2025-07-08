import React from "react";

const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function Keyboard({ guesses }) {
  const letterToStatusMap = guesses
    .flatMap((guess) => guess.result)
    .reduce((obj, item) => ({ ...obj, [item.letter]: item.status }), {});

  return (
    <div className="keyboard">
      {rows.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((char) => (
            <div
              key={char}
              className={`keyboard-char ${letterToStatusMap[char] ?? ""}`}
            >
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
