import TodoItemsContainer from "./TodoItemsContainer";
import { BottomBar } from "./BottomBar";
import { TodoInput } from "./TodoInput";

function TodoListContainer() {
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

      <TodoInput></TodoInput>

      <div>
        <TodoItemsContainer></TodoItemsContainer>
        <BottomBar></BottomBar>
      </div>
    </div>
  );
}

export default TodoListContainer;
