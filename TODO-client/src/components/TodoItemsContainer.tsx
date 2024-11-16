import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import CheckIcon from "@mui/icons-material/Check";

import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useEffect, useState } from "react";

export function TodoItemsContainer({
  todos,
  // setTodos,
  // setFilterValue,
  filterValue,
  checked,
  setChecked,
}: any) {
  const [todosArray, setTodosArray] = useState<Array<object>>(todos);
  console.log("todos", todos);

  useEffect(() => {
    let updatedTodos;

    if (filterValue === "All") {
      setTodosArray(todos);
      console.log("in all");
    } else if (filterValue === "Active") {
      updatedTodos = todos.filter((todo: any) => !todo.isComplete);
      setTodosArray(updatedTodos);
    } else if (filterValue === "Completed") {
      updatedTodos = todos.filter((todo: any) => todo.isComplete);
      setTodosArray(updatedTodos);
    }
  }, [filterValue, todos]);

  function handleToggle(todo: { todoItem: string; isComplete: boolean }) {
    console.log("obj", todo);

    const newChecked = [...checked];
    console.log("newChecked : ", newChecked);
    if (newChecked.includes(todo.todoItem)) {
      const index = checked.indexOf(todo.todoItem);
      newChecked.splice(index, 1);
      todo.isComplete = false;
    } else {
      newChecked.push(todo.todoItem);
      todo.isComplete = true;
    }
    setChecked(newChecked);
  }

  return (
    <div className="todo-items-container">
      <List
        sx={{
          width: "100%",
          bgcolor: "#2f283e",
        }}
      >
        {todosArray.length === 0 ? (
          <div className="empty-message">
            <img src="./src/assets/images/todo-empty-img.png" />
            <h3>
              {filterValue === "All"
                ? "Add a task to get started!"
                : `No ${filterValue} items`}
            </h3>
          </div>
        ) : (
          todosArray.map((todo: any) => {
            const labelId = `checkbox-list-label-${todo.todoItem}`;

            return (
              <ListItem
                key={todo.todoItem}
                sx={{
                  borderLeft: 0,
                  borderRight: 0,
                  borderTop: 0,
                  borderBottom: 1,
                  borderColor: "#a29d9d",
                  borderStyle: "solid",
                }}
              >
                <ListItemButton
                  role={undefined}
                  onClick={() => handleToggle(todo)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      icon={
                        <RadioButtonUncheckedIcon sx={{ color: "#ffffff" }} />
                      }
                      checkedIcon={
                        <CheckIcon
                          sx={{
                            background: "linear-gradient( #3f5efb, #fc466b)",
                            color: "#ffffff",
                            borderRadius: 100,
                          }}
                        />
                      }
                      edge="start"
                      checked={checked.includes(todo.todoItem)}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    // primary={`Line item ${value + 1}`}
                    primary={`${todo.todoItem}`}
                    // primaryTypographyProps={{ fontSize: 18 }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })
        )}
      </List>
    </div>
  );
}

export default TodoItemsContainer;
