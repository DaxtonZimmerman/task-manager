export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li>
      {task.completed ? <s>{task.text}</s> : task.text}{" "}
      <button type="button" onClick={() => onToggle(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>{" "}
      <button type="button" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  );
}