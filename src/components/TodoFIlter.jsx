import React from "react";
import { StyledFilterWrapper } from "./TodoList.styled";

const TodoFilter = ({ todosList, setTodosList, setReverse, reverse }) => {
  const filterItems = () => {
    setReverse(!reverse);
    const list = [...todosList].sort((a, b) => {
      return reverse
        ? b["todoContent"].localeCompare(a["todoContent"])
        : a["todoContent"].localeCompare(b["todoContent"]);
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
