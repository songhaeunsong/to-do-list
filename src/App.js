import React, { useEffect, useState } from "react";
import "./App.css";
import Template from "./components/Template";
import ToDoList from "./components/ToDoList";
import ToDoInsert from "./components/ToDoInsert";

let nextId = 1;

function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [todos, setTodos] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const onInsertTodo = (text, subtext, date) => {
    if (text === "") {
      return alert("제목을 입력해주세요!");
    } else {
      const todo = {
        id: nextId,
        text,
        subtext,
        date,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
    setSelectedTodo(null);
  };

  const onUpdate = (id, text, subtext, date) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, text, subtext, date } : todo
      )
    );
    setSelectedTodo(null);
  };

  return (
    <Template>
      <ToDoInsert
        selectedTodo={selectedTodo}
        onInsertTodo={onInsertTodo}
        onRemove={onRemove}
        onUpdate={onUpdate}
      />
      <form>
        <button type="button" onClick={() => setIsCompleted(!isCompleted)}>
          completed
        </button>
      </form>
      {isCompleted
        ? todos.map(
            (todo) =>
              todo.checked && (
                <ToDoList
                  todos={todos}
                  onCheckToggle={onCheckToggle}
                  onChangeSelectedTodo={onChangeSelectedTodo}
                />
              )
          )
        : todos.map((todo) => (
            <ToDoList
              todos={todos}
              onCheckToggle={onCheckToggle}
              onChangeSelectedTodo={onChangeSelectedTodo}
            />
          ))}
    </Template>
  );
}

export default App;
