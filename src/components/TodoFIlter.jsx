import React, { useState } from "react";
import { StyledFilterWrapper } from "./TodoList.styled";

const TodoFilter = ({ todosList, setTodosList }) => {
  const filterItems = () => {
    setTodosList(
      todosList.sort((a, b) => {
        return a["todoContent"].localeCompare(b["todoContent"]);
      })
    );
    console.log(todosList);
  };

  return (
    <StyledFilterWrapper>
      <button onClick={() => filterItems()}>Filter A-Z</button>
    </StyledFilterWrapper>
  );
};

export default TodoFilter;
