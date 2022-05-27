import React, { useState } from "react";
import AddNewTodo from "./AddNewTodo";
import TodoItemsWrapper from "./TodoItemsWrapper";
import {
  StyledTodoWrapper,
  StyledTodoContent,
  StyledTodoTitle,
} from "./TodoList.styled";

const TodoList = () => {
  const [todosList, setTodosList] = useState([
    {
      todoContent: "Make a ToDo list",
      isChecked: true,
    },
    {
      todoContent: "Don't forget to do a ToDo list",
      isChecked: true,
    },
  ]);

  return (
    <StyledTodoWrapper className="todo-wrapper">
      <StyledTodoContent className="todo-wrapper__content">
        <StyledTodoTitle className="todo-title__wrapper">
          <h1>Gabe's mesmerising Todo List</h1>
        </StyledTodoTitle>
        <AddNewTodo todosList={todosList} setTodosList={setTodosList} />
        <TodoItemsWrapper todosList={todosList} setTodosList={setTodosList} />
      </StyledTodoContent>
    </StyledTodoWrapper>
  );
};

export default TodoList;
