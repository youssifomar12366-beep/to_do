

import { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) {
      setError('Task is required');
      return;
    }
    addTask(taskText);
    setTaskText('');
    setError('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="todo-input-group">
        <input
          type="text"
          placeholder="Enter New Task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className={error ? 'error-input' : ''}
        />
        <button type="submit" className="add-btn">Add</button>
      </div>
      {error && <span className="error-text">{error}</span>}
    </form>
  );
};

export default TodoForm;