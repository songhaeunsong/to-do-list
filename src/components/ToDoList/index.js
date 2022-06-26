import React from "react";
import ToDoItem from "../ToDoItem";
import "./todolist.css";

const ToDoList = ({
  todos,
  onCheckToggle,
  onChangeSelectedTodo,
  isCompleted,
}) => {
  return (
    <div className="todo-list">
      {isCompleted
        ? todos.map(
            (todo) =>
              todo.checked && (
                <ToDoItem
                  todo={todo}
                  key={todo.id}
                  onCheckToggle={onCheckToggle}
                  onChangeSelectedTodo={onChangeSelectedTodo}
                />
              )
          )
        : todos.map((todo) => (
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
