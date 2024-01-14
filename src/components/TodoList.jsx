import React from 'react';
import TodoItem from './Todoitems';

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
      <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onDelete={() => deleteTodo(index)}
          onEdit={() => editTodo(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
