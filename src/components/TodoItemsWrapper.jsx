import React from "react";
import TodoItem from "./TodoItem";

const TodoItemsWrapper = ({ todosList, setTodosList }) => {
  return (
    <div className="todo-list-wrapper">
      {todosList.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          todosList={todosList}
          setTodosList={setTodosList}
        />
      ))}
    </div>
  );
};

export default TodoItemsWrapper;
