function AddTask({ onAddTask }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      const newTask = e.target.elements.task.value.trim();
      if (newTask) {
        onAddTask(newTask);
        e.target.reset();
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Enter a new task" />
        <button type="submit">Add</button>
      </form>
    );
  }
  
  export default AddTask;
  