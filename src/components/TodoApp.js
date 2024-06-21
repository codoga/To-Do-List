import React, { useState } from 'react';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import '../styles.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { text: 'Learn JavaScript', completed: true },
    { text: 'Learn React', completed: false },
    { text: 'Have a life!', completed: false },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <section className="todoapp">
      <TodoHeader addTodo={addTodo} />
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </section>
      <TodoFooter todos={todos} clearCompleted={clearCompleted} />
    </section>
  );
};

export default TodoApp;
