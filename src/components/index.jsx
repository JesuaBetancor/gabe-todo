import React, { useState } from "react";
import AddNewTodo from "./AddNewTodo";
import TodoItemsWrapper from "./TodoItemsWrapper";
import TodoFilter from "./TodoFIlter";
import {
  StyledTodoWrapper,
  StyledTodoContent,
  StyledTodoTitle,
} from "./TodoList.styled";

/*
Missing features:

- removeTodo (move it to this file, the function)
- editTodo (same)
- Make filter to be ordered by Z-A after A-Z click was done
*/

const todoListItems = [
  {
    id: 1,
    todoContent: "Make a ToDo list",
    isChecked: true,
  },
  {
    id: 2,
    todoContent: "Don't forget to do a ToDo list",
    isChecked: true,
  },
  {
    id: 3,
    todoContent: "Isn't this the best ToDo list ever made?",
    isChecked: false,
  },
];

const TodoList = () => {
  const [todosList, setTodosList] = useState(todoListItems);

  const handleTickTodo = (id) => {
    console.log(id);
    console.log(todosList);
    const newTodoList = todosList.map((item) => {
      return Number(item.id) === Number(id)
        ? { ...item, isChecked: !item.isChecked }
        : item;
    });
    console.log(newTodoList);
    setTodosList(newTodoList);
  };

  return (
    <StyledTodoWrapper className="todo-wrapper">
      <StyledTodoContent className="todo-wrapper__content">
        <StyledTodoTitle className="todo-title__wrapper">
          <h1>Gabe's mesmerising Todo List</h1>
        </StyledTodoTitle>
        <AddNewTodo todosList={todosList} setTodosList={setTodosList} />

        <TodoFilter todosList={todosList} setTodosList={setTodosList} />

        <TodoItemsWrapper
          todosList={todosList}
          setTodosList={setTodosList}
          handleTickTodo={handleTickTodo}
        />
      </StyledTodoContent>
    </StyledTodoWrapper>
  );
};

export default TodoList;
