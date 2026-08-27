import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import TodoForm from '../Components/TodoForm';
import TodoItem from '../Components/TodoItme';
import '../styles/Todo.css';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  // Load from LocalStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos && savedTodos.length > 0) {
      setTodos(savedTodos);
    }
  }, []);

  // Save to LocalStorage whenever todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    setTodos([...todos, newTask]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <Navbar/>
      <div className="todo-page-container">
        <div className="todo-header">
          <h1>ToDo</h1>
        </div>
        
        <div className="todo-content">
          <TodoForm addTask={addTask}/>
          
          <div className="todo-list">
            <h3 className="list-title">Let's get some work done!</h3>
            {todos.map(todo => (
              <TodoItem deleteTask={deleteTask} key={todo.id} task={todo} toggleComplete={toggleComplete}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;