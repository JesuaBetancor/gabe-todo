import React from "react";
import TodoItem from "./TodoItem";

const TodoItemsWrapper = ({
  todosList,
  setTodosList,
  handleTickTodo,
  removeTodo,
}) => {
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
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoItemsWrapper;
