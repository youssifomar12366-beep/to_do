const TodoItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="todo-item">
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <div className="todo-actions">
        <button 
          className="complete-btn" 
          onClick={() => toggleComplete(task.id)}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button 
          className="delete-btn" 
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;