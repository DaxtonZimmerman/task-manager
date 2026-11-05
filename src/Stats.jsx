export default function Stats({ tasks }) {
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <section>
      <h2>Task Statistics</h2>
      <p>Total tasks: {tasks.length}</p>
      <p>Completed tasks: {completedCount}</p>
    </section>
  );
}