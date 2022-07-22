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
    id: 1,
    todoContent: "This is the worst pokemon. WTF is with the flower?",
    isChecked: false,
    name: "Testemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    types: [
      {
        slot: 1,
        type: {
          name: "mother",
        },
      },
      {
        slot: 2,
        type: {
          name: "lover",
        },
      },
      {
        slot: 3,
        type: {
          name: "(incest)",
        },
      },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
  },
];

const TodoList = () => {
  const [todosList, setTodosList] = useState(todoListItems);
  const [reverse, setReverse] = useState(false);

  const handleTickTodo = (id) => {
    const newTodoList = todosList.map((item) => {
      return Number(item.id) === Number(id)
        ? { ...item, isChecked: !item.isChecked }
        : item;
    });

    setTodosList(newTodoList);
  };

  const removeTodo = (index) => {
    const newTodos = [...todosList].filter((item) => {
      return item.id !== index;
    });

    setTodosList(newTodos);
  };

  const handleInputText = (inputValue, oldTodo) => {
    const handledList = [...todosList].map((handledItem) => {
      if (handledItem.id === oldTodo.id) {
        handledItem.todoContent = inputValue;
      }
      return handledItem;
    });
    setTodosList(handledList);
  };

  return (
    <StyledTodoWrapper className="todo-wrapper">
      <StyledTodoContent className="todo-wrapper__content">
        <StyledTodoTitle className="todo-title__wrapper">
          <h1>Poke Asylum</h1>
        </StyledTodoTitle>
        <AddNewTodo todosList={todosList} setTodosList={setTodosList} />

        <TodoFilter
          reverse={reverse}
          setReverse={setReverse}
          todosList={todosList}
          setTodosList={setTodosList}
        />

        <TodoItemsWrapper
          handleInputText={handleInputText}
          removeTodo={removeTodo}
          todosList={todosList}
          setTodosList={setTodosList}
          handleTickTodo={handleTickTodo}
        />
      </StyledTodoContent>
    </StyledTodoWrapper>
  );
};

export default TodoList;
