import React, { useState } from "react";
import { StyledAddNewTodo, StyledAddNewTodoContent } from "./TodoList.styled";
import { plusIcon } from "../constants/base64src";

const AddNewTodo = ({ todosList, setTodosList }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputID, setInputID] = useState("");

  const addTodo = (todoContent, pokeInfos) => {
    const newTodos = [
      ...todosList,
      {
        id: Number(inputID),
        todoContent,
        isChecked: false,
        name: pokeInfos.name,
        image: pokeInfos.sprites.front_default,
        sprites: pokeInfos.sprites,
        types: pokeInfos.types,
      },
    ];
    setTodosList(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let alreadyExist = true;
    if (inputValue && inputID > 0 && inputID <= 1154) {
      for (let i = 0; i < todosList.length; i++) {
        if (Number(inputID) === Number(todosList[i].id)) {
          alreadyExist = false;
        }
      }

      if (alreadyExist === true) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputID}`)
          .then((response) => response.json())
          .then((pokeInfos) => {
            addTodo(inputValue, pokeInfos);
            setInputValue("");
            setInputID(0);
          });
      }
    }
  };

  return (
    <StyledAddNewTodo className="add-new-todo" onSubmit={handleSubmit}>
      <StyledAddNewTodoContent className="add-new-todo__content">
        <input
          className="add-new-todo__input"
          type="number"
          value={inputID}
          onChange={(e) => setInputID(e.target.value)}
          placeholder="Add Pokemon ID"
          min="1"
          max="1154"
        />
        <input
          className="add-new-todo__input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add Pokemon description"
        />
        <button className="add-new-todo__button" type="submit">
          <img src={plusIcon} alt="Plus Icon" />
        </button>
      </StyledAddNewTodoContent>
    </StyledAddNewTodo>
  );
};

export default AddNewTodo;
