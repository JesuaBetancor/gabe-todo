import React from "react";
import TodoItem from "./TodoItem";
import { StyledTodoListWrapper } from "./TodoList.styled";

const TodoItemsWrapper = ({
  todosList,
  setTodosList,
  handleTickTodo,
  removeTodo,
  handleInputText,
}) => {
  return (
    <StyledTodoListWrapper className="todo-list-wrapper">
      {todosList.map((todo) => (
        <TodoItem
          handleInputText={handleInputText}
          key={todo.id}
          index={todo.id}
          todo={todo}
          todosList={todosList}
          setTodosList={setTodosList}
          handleTickTodo={handleTickTodo}
          removeTodo={removeTodo}
        />
      ))}
    </StyledTodoListWrapper>
  );
};

export default TodoItemsWrapper;
