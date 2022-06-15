import React, { useState } from "react";
import AddNewTodo from "./AddNewTodo";
import TodoItemsWrapper from "./TodoItemsWrapper";
import TodoFilter from "./TodoFIlter";
import {
  StyledTodoWrapper,
  StyledTodoContent,
  StyledTodoTitle,
} from "./TodoList.styled";

const todoListItems = [
  {
    todoContent: "Make a ToDo list",
    isChecked: true,
  },
  {
    todoContent: "Don't forget to do a ToDo list",
    isChecked: true,
  },
];

const TodoList = () => {
  const [todosList, setTodosList] = useState(todoListItems);

  return (
    <StyledTodoWrapper className="todo-wrapper">
      <StyledTodoContent className="todo-wrapper__content">
        <StyledTodoTitle className="todo-title__wrapper">
          <h1>Gabe's mesmerising Todo List</h1>
        </StyledTodoTitle>
        <AddNewTodo todosList={todosList} setTodosList={setTodosList} />

        <TodoFilter todosList={todosList} setTodosList={setTodosList} />

        <TodoItemsWrapper todosList={todosList} setTodosList={setTodosList} />
      </StyledTodoContent>
    </StyledTodoWrapper>
  );
};

export default TodoList;
