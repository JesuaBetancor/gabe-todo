import React from "react";
import TodoItem from "./TodoItem";

const TodoItemsWrapper = ({ todosList, setTodosList, handleTickTodo }) => {
  return (
    <div className="todo-list-wrapper">
      {todosList.map((todo) => (
        <TodoItem
          key={todo.id}
          index={todo.id}
          todo={todo}
          todosList={todosList}
          setTodosList={setTodosList}
          handleTickTodo={handleTickTodo}
        />
      ))}
    </div>
  );
};

export default TodoItemsWrapper;
