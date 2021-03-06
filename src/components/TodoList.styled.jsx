import styled from "styled-components";

const StyledTodoWrapper = styled.div`
  background-color: #d8bfd8;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTodoContent = styled.div`
  background-color: #b0e0e6;
  width: 400px;
  max-width: 80%;
  min-height: 500px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 6px;
`;

const StyledTodoTitle = styled.div`
  margin: 30px 0 40px;

  h1 {
    text-align: center;
    max-width: 300px;
    margin: auto;
    font-size: 26px;
    color: #006400;
  }
`;

const StyledAddNewTodo = styled.form`
  margin-bottom: 20px;
`;

const StyledAddNewTodoContent = styled.div`
  position: relative;
  width: 100%;

  input {
    &.add-new-todo__input,
    &.add-new-todo__input:focus {
      width: calc(100% - 20px);
      font-size: 16px;
      padding: 12px 10px;
      border-radius: 8px;
      border: 1px solid purple;
    }
  }

  button {
    &.add-new-todo__button {
      position: absolute;
      top: 2px;
      right: 0;
      background-color: #d8bfd8;
      color: #006400;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      border: none;
      cursor: pointer;
    }
  }
`;

const StyledTodoListWrapper = styled.div`
  max-height: 240px;
  overflow-x: hidden;
  overflow-y: auto;

  /* Scroll bar styling */
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: green;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const StyledTodoItem = styled.div`
  display: flex;
  min-height: 40px;
  margin-bottom: 10px;
  background-color: #fff8dc;
  border-radius: 6px;
`;

const StyledTodoItemButton = styled.div`
  width: 40px;
  height: 40px;

  button {
    display: flex;
    width: 30px;
    height: 30px;
    margin: 6px;
    justify-content: center;
    align-items: center;
  }
`;

const StyledTodoItemContent = styled.input`
  width: calc(100% - 80px);
  align-items: center;
  display: flex;
  padding: 10px;
`;

const StyledFilterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  min-height: 40px;
  margin-bottom: 20px;

  button {
    border: 1px solid purple;
    background-color: #d8bfd8;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 6px;
  }
`;

export {
  StyledTodoWrapper,
  StyledTodoContent,
  StyledTodoTitle,
  StyledAddNewTodo,
  StyledAddNewTodoContent,
  StyledTodoItem,
  StyledTodoItemButton,
  StyledTodoItemContent,
  StyledFilterWrapper,
  StyledTodoListWrapper,
};
