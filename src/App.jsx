import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import "./App.css"

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setEditingIndex(index);
  };

  const updateTodo = (updatedTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[editingIndex] = updatedTodo;
    setTodos(updatedTodos);
    setEditingIndex(null);
  };

  const cancelEdit = () => {
    setEditingIndex(null);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoForm
        addTodo={addTodo}
        updateTodo={updateTodo}
        cancelEdit={cancelEdit}
        editIndex={editingIndex}
        Title={editingIndex !== null ? todos[editingIndex].title : ''}
        Description={editingIndex !== null ? todos[editingIndex].description : ''}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
};

export default App;

