function TaskList({ tasks, onChangeTask, onDeleteTask }) {
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="text"
              value={task.text}
              onChange={(e) => onChangeTask({ ...task, text: e.target.value })}
            />
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => onChangeTask({ ...task, done: !task.done })}
            />
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default TaskList;
  