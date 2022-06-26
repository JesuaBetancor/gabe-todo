import React, { useState } from "react";
import { StyledAddNewTodo, StyledAddNewTodoContent } from "./TodoList.styled";
import { plusIcon } from "../constants/base64src";

const AddNewTodo = ({ todosList, setTodosList }) => {
  const [inputValue, setInputValue] = useState("");

  const addTodo = (todoContent) => {
    const newTodos = [
      ...todosList,
      {
        todoContent,
        isChecked: false,
        id: Math.floor(100000000 + Math.random() * 900000000),
      },
    ];
    setTodosList(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <StyledAddNewTodo className="add-new-todo" onSubmit={handleSubmit}>
      <StyledAddNewTodoContent className="add-new-todo__content">
        <input
          className="add-new-todo__input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add ToDo"
        />
        <button className="add-new-todo__button" type="submit">
          <img src={plusIcon} alt="Plus Icon" />
        </button>
      </StyledAddNewTodoContent>
    </StyledAddNewTodo>
  );
};

export default AddNewTodo;
