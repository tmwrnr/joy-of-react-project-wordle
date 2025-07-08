import React, { useEffect } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import Keyboard from "../Keyboard";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const gameStatus =
    guesses.at(-1)?.guess === answer
      ? "won"
      : guesses.length === NUM_OF_GUESSES_ALLOWED
      ? "lost"
      : "running";

  function handleAdd(newGuess) {
    setGuesses([
      ...guesses,
      {
        id: crypto.randomUUID(),
        guess: newGuess,
        result: checkGuess(newGuess, answer),
      },
    ]);
  }

  function handleRestart() {
    setAnswer(sample(WORDS));
    setGuesses([]);
  }

  useEffect(() => console.info({ answer }), [answer]);

  return (
    <>
      <GuessResults guesses={guesses} />

      <GuessInput onAdd={handleAdd} disabled={gameStatus !== "running"} />

      <Keyboard guesses={guesses} />

      {gameStatus === "won" && (
        <WonBanner numOfGuesses={guesses.length} onRestart={handleRestart} />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} onRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
