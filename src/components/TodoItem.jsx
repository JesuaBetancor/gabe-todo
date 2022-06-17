import React from "react";
import {
  StyledTodoItem,
  StyledTodoItemButton,
  StyledTodoItemContent,
} from "./TodoList.styled";
import { checkedIcon, closeIcon } from "../constants/base64src";

function removeTodo (itemIndex) {
  console.log('helloooo')
};
const TodoItem = ({ todo, index, todosList, setTodosList, handleTickTodo }) => {
    // MOVE IT TO GLOBAL
  // const removeTodo = (itemIndex) => {
  //   const newTodos = [...todosList];
  //   newTodos.splice(itemIndex, 1);
  //   setTodosList(newTodos);
  // };

  return (
    <StyledTodoItem className="todo-item">
      <StyledTodoItemButton className="todo-item__button">
        <button
          className="todo-item__button-check"
          onClick={() => handleTickTodo(index)}
        >
          <img src={checkedIcon} alt="Check Icon" />
        </button>
      </StyledTodoItemButton>

      <StyledTodoItemContent
        className="todo-item__content"
        style={{ textDecoration: todo.isChecked ? "line-through" : "initial" }}
        type="text"
        value={todo.todoContent}
      />

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
