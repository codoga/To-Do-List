import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={toggleTodo} />
        <label>{todo.text}</label>
        <button className="destroy" onClick={deleteTodo}></button>
      </div>
    </li>
  );
};

export default TodoItem;
