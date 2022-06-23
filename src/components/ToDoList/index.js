import React from "react";
import ToDoItem from "../ToDoItem";
import "./todolist.css";

const ToDoList = ({ todos, onCheckToggle, onChangeSelectedTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          todo={todo}
          key={todo.id}
          onCheckToggle={onCheckToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
      ))}
    </div>
  );
};
export default ToDoList;
