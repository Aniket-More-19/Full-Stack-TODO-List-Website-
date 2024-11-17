import TodoItemsContainer from "./TodoItemsContainer";
import { BottomBar } from "./BottomBar";
import { TodoInput } from "./TodoInput";
import React, { useState } from "react";

function TodoListContainer() {
  const [todos, setTodos] = useState<Array<object>>([]);
  const [filterValue, setFilterValue] = useState<
    "All" | "Active" | "Completed" | "Clear Completed"
  >("All");

  const [checked, setChecked] = React.useState<Array<number>>([]); // array for storing checked items ids

  function addTodo(newTodo: any) {
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="todo-list-container">
      <div className="title-container px-2 py-1">
        <h1 className="title">TODO</h1>
        <img
          className="light-dark-mode"
          src="./src/assets/icons/light-dark-icon.png"
          alt="light/dark mode icon"
        />
      </div>

      <TodoInput addTodo={addTodo}></TodoInput>

      <div>
        <TodoItemsContainer
          todos={todos}
          filterValue={filterValue}
          checked={checked}
          setChecked={setChecked}
        ></TodoItemsContainer>
        <BottomBar
          todos={todos}
          setTodos={setTodos}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          checked={checked}
          setChecked={setChecked}
        ></BottomBar>
      </div>
    </div>
  );
}

export default TodoListContainer;
