import React from "react";
import {
  StyledTodoItem,
  StyledTodoItemButton,
  StyledTodoItemContent,
} from "./TodoList.styled";
import { checkedIcon, closeIcon } from "../constants/base64src";

const TodoItem = ({ todo, index, todosList, setTodosList }) => {
  const checkTodo = (index) => {
    const newTodos = [...todosList];
    newTodos[index].isChecked = true;
    setTodosList(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todosList];
    newTodos.splice(index, 1);
    setTodosList(newTodos);
  };

  return (
    <StyledTodoItem className="todo-item">
      <StyledTodoItemButton className="todo-item__button">
        <button
          className="todo-item__button-check"
          onClick={() => checkTodo(index)}
        >
          <img src={checkedIcon} alt="Check Icon" />
        </button>
      </StyledTodoItemButton>

      <StyledTodoItemContent
        className="todo-item__content"
        style={{ textDecoration: todo.isChecked ? "line-through" : "initial" }}
      >
        {todo.todoContent}
      </StyledTodoItemContent>

      <StyledTodoItemButton className="todo-item__button">
        <button
          className="todo-item__button-remove"
          onClick={() => removeTodo(index)}
        >
          <img src={closeIcon} alt="Close Icon" />
        </button>
      </StyledTodoItemButton>
    </StyledTodoItem>
  );
};

export default TodoItem;
