import React from "react";

function GuessInput({ onAdd, disabled }) {
  const [value, setValue] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAdd(value);
    setValue("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value.toUpperCase())}
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
