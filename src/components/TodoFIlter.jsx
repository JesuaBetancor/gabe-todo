import React from "react";
import { StyledFilterWrapper } from "./TodoList.styled";

const TodoFilter = ({ todosList, setTodosList }) => {
  const filterItems = () => {
    const list = [...todosList].sort((a, b) => {
        return a["todoContent"].localeCompare(b["todoContent"]);
    });

    setTodosList(list);
    console.log(list);
  };

  return (
    <StyledFilterWrapper>
      <button onClick={() => filterItems()}>Filter A-Z</button>
    </StyledFilterWrapper>
  );
};

export default TodoFilter;
