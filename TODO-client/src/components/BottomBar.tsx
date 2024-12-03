export function BottomBar({
  todos,
  setTodos,
  filterValue,
  setFilterValue,
  checked,
  setChecked,
  getAllTodos,
}: any) {
  function handleFilterValue(value: string) {
    setFilterValue(value);
  }

  async function handleClearCompleted() {
    try {
      fetch("http://localhost:3000/todos/clear-completed", {
        method: "POST",
        body: JSON.stringify({
          completedTodoIds: checked,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((msg) => {
          console.log("Clear completed \n", msg);
          setChecked([]); // deleted all completed/ checked todos. So, checked array will be empty now.
          setFilterValue("All");
          getAllTodos();
        });
    } catch (error) {
      console.log("Error deleting completed todos : \n", error);
    }
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
          <h3
            onClick={() => {
              handleFilterValue("Clear Completed");
              handleClearCompleted();
            }}
          >
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
