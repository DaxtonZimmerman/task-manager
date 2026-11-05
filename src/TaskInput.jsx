import { useState } from "react";

export default function TaskInput({ onAdd }) {
  const [text, setText] = useState("");
  const trimmedText = text.trim();

  function handleSubmit(event) {
    event.preventDefault();

    if (!trimmedText) return;

    onAdd(trimmedText);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-text">New task</label>{" "}
      <input
        id="task-text"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Enter a task"
      />{" "}
      <button type="submit" disabled={!trimmedText}>
        Add
      </button>
    </form>
  );
}