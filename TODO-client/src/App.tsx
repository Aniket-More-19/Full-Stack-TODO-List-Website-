import "./App.css";
import TodoListContainer from "./components/TodoListContainer";
import "./styles/global.css";

import * as React from "react";

function App() {
  return (
    <div className="home-container">
      <div className="home-bg-img">
        <div className="img-overlay"></div>
        <img src="/src/assets/images/todo-bg.jpg" alt="home background image" />
      </div>
      <div className="empty-div"></div>

      {/** todo list container */}

      <TodoListContainer></TodoListContainer>
    </div>
  );
}

export default App;
