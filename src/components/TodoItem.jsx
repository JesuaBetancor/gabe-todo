import React from "react";
import {
  StyledTodoItem,
  StyledTodoItemButton,
  StyledTodoItemContent,
  StyledCardInfo,
} from "./TodoList.styled";
import { checkedIcon, closeIcon } from "../constants/base64src";

const TodoItem = ({
  todo,
  index,
  handleTickTodo,
  removeTodo,
  handleInputText,
}) => {
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
        onChange={(e) => {
          let inputValue = e.target.value;
          let oldTodo = todo;
          handleInputText(inputValue, oldTodo);
        }}
      />

      <StyledTodoItemButton className="todo-item__button">
        <button
          className="todo-item__button-remove"
          onClick={() => removeTodo(index)}
        >
          <img src={closeIcon} alt="Close Icon" />
        </button>
      </StyledTodoItemButton>
      <StyledCardInfo>
        {todo.image && <img src={todo.image} alt="x" />}
        <h2 className="poke-name">
          {todo.name} <span className="red-id">#{todo.id}</span>
        </h2>
        <p>
          <b>Description:</b> {todo.todoContent}
        </p>
        <p>
          <b>Types:</b>
          {todo.types.map((e) => (
            <span key={e.slot}> {e.type.name} </span>
          ))}
        </p>
      </StyledCardInfo>
    </StyledTodoItem>
  );
};

export default TodoItem;
