import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TiPencil, TiTrash } from "react-icons/ti";
import "./todoinsert.css";

const ToDoInsert = ({ onInsertTodo, selectedTodo, onRemove, onUpdate }) => {
  const [text, setText] = useState("");
  const [subtext, setSubtext] = useState("");
  const [tag, setTag] = useState("");
  const [date, setDate] = useState("");

  const textChange = (e) => {
    setText(e.target.value);
  };
  const subtextChange = (e) => {
    setSubtext(e.target.value);
  };

  const tagChange = (e) => {
    setTag(e.target.value);
  };

  const dateChange = (e) => {
    setDate(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(text, subtext, tag, date);
    setText("");
    setSubtext("");
    setTag("");
    setDate("");
  };

  useEffect(() => {
    if (selectedTodo) {
      setText(selectedTodo.text);
      setSubtext(selectedTodo.subtext);
      setTag(selectedTodo.subtext);
      setDate(selectedTodo.date);
    }
  }, [selectedTodo]);

  return (
    <div className="todo-insert">
      {selectedTodo ? (
        <form
          className="rewrite"
          onSubmit={() => {
            onUpdate(selectedTodo.id, text, subtext, tag, date);
          }}
        >
          <input
            requiered
            placeholder="수정사항을 입력하세요."
            value={text}
            onChange={textChange}
          />
          <input
            requiered
            placeholder="상세설명..."
            value={subtext}
            onChange={subtextChange}
          />
          <p className="dueD">마감 목표일</p>
          <input id="date" type="date" value={date} onChange={dateChange} />

          <div>
            <TiPencil
              onClick={() => {
                onUpdate(selectedTodo.id, text, subtext, tag, date);
                setText("");
                setSubtext("");
                setDate("");
              }}
            />
            <TiTrash
              onClick={() => {
                onRemove(selectedTodo.id);
                setText("");
                setSubtext("");
                setDate("");
              }}
            />
          </div>
        </form>
      ) : (
        <form onSubmit={onSubmit}>
          <input
            requiered
            placeholder="제목을 입력하세요."
            value={text}
            onChange={textChange}
          />
          <input
            requiered
            placeholder="상세설명..."
            value={subtext}
            onChange={subtextChange}
          />
          <input placeholder="태그" value={tag} onChange={tagChange} />
          <p className="dueD">마감 목표일</p>
          <input id="date" type="date" value={date} onChange={dateChange} />

          <button className="add-todo-btn" type="submit">
            <AiOutlinePlus />
          </button>
          <div></div>
        </form>
      )}
    </div>
  );
};
export default ToDoInsert;
