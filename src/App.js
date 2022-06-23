import React, { useState } from "react";
import "./App.css";
import Template from "./components/Template";
import ToDoList from "./components/ToDoList";
import ToDoInsert from "./components/ToDoInsert";

function App() {
  let nextId = 1;
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [todos, setTodos] = useState([]);

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
    setSelectedTodo((selectedTodo) => !selectedTodo);
  };

  const onUpdate = (id, text, subtext, date) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, text, subtext, date } : todo
      )
    );
    setSelectedTodo((selectedTodo) => !selectedTodo);
  };
  return (
    <Template>
      <ToDoInsert
        selectedTodo={selectedTodo}
        onInsertTodo={onInsertTodo}
        onRemove={onRemove}
        onUpdate={onUpdate}
      />
      <ToDoList
        todos={todos}
        onCheckToggle={onCheckToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
      />
    </Template>
  );
}

export default App;
