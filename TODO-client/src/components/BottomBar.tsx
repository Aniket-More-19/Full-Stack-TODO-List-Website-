export function BottomBar({
  todos,
  setTodos,
  filterValue,
  setFilterValue,
  checked,
  setChecked,
}: any) {
  function handleFilterValue(value: string) {
    setFilterValue(value);
  }

  function handleClearCompleted() {
    let updatedTodos = todos.filter((todo: any) => !todo.isComplete);
    let updatedTodoItems = updatedTodos.map((todo: any) => todo.todoItem);

    let newChecked = checked.filter((todoItem: string) =>
      updatedTodoItems.includes(todoItem)
    );

    setChecked(newChecked);
    setTodos(updatedTodos);
    setFilterValue("All");
  }

  return (
    <>
      {/** bottom bar for desktop */}
      <div className="bottom-actions-bar-desktop ">
        <h3>
          {
            todos.filter(
              (todo: { todoItem: string; isComplete: boolean }) =>
                !todo.isComplete
            ).length
          }{" "}
          items left
        </h3>
        <div className="bottom-navigation">
          <h3
            className={filterValue === "All" ? "blue-nav" : ""}
            onClick={() => handleFilterValue("All")}
          >
            All
          </h3>
          <h3
            className={filterValue === "Active" ? "blue-nav" : ""}
            onClick={() => handleFilterValue("Active")}
          >
            Active
          </h3>
          <h3
            className={filterValue === "Completed" ? "blue-nav" : ""}
            onClick={() => handleFilterValue("Completed")}
          >
            Completed
          </h3>
        </div>
        <h3
          onClick={() => {
            handleFilterValue("Clear Completed");
            handleClearCompleted();
          }}
        >
          Clear Completed
        </h3>
      </div>

      {/** bottom bar for mobile */}
      <div className="bottom-actions-bar-mobile px-2">
        <div className="bottom-actions">
          <h3>
            {
              todos.filter(
                (todo: { todoItem: string; isComplete: boolean }) =>
                  !todo.isComplete
              ).length
            }{" "}
            items left
          </h3>{" "}
          <h3 onClick={() => handleFilterValue("Clear Completed")}>
            Clear Completed
          </h3>
        </div>
        <div className="bottom-navigation">
          <h3
            className={filterValue === "All" ? "blue-nav" : ""}
            onClick={() => handleFilterValue("All")}
          >
            All
          </h3>
          <h3
            className={filterValue === "Active" ? "blue-nav" : ""}
            onClick={() => handleFilterValue("Active")}
          >
            Active
          </h3>
          <h3
            className={filterValue === "Completed" ? "blue-nav" : ""}
            onClick={() => handleFilterValue("Completed")}
          >
            Completed
          </h3>
        </div>
      </div>
    </>
  );
}
