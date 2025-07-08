import React from "react";

import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {rows.map((row) => (
        <Guess key={row} guess={guesses[row]} />
      ))}
    </div>
  );
}
export default GuessResults;
