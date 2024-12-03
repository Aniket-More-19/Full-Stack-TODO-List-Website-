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
  filterValue,
  checked,
  setChecked,
}: any) {
  const [todosArray, setTodosArray] =
    useState<Array<{ id: number; todoItem: string; isComplete: boolean }>>(
      todos
    );

  useEffect(() => {
    let updatedTodos;

    if (filterValue === "All") {
      setTodosArray(todos);
    } else if (filterValue === "Active") {
      updatedTodos = todos.filter((todo: any) => !todo.isComplete);
      setTodosArray(updatedTodos);
    } else if (filterValue === "Completed") {
      updatedTodos = todos.filter((todo: any) => todo.isComplete);
      setTodosArray(updatedTodos);
    }
  }, [filterValue, todos]);

  function handleToggle(todo: {
    id: number;
    todoItem: string;
    isComplete: boolean;
  }) {
    const newChecked = [...checked];
    if (newChecked.includes(todo.id)) {
      const index = checked.indexOf(todo.id);
      newChecked.splice(index, 1);
      todo.isComplete = false;
    } else {
      newChecked.push(todo.id);
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
          todosArray.map(
            (todo: { id: number; todoItem: string; isComplete: boolean }) => {
              const labelId = `checkbox-list-label-${todo.todoItem}`;

              return (
                <ListItem
                  key={todo.id}
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
                        checked={checked.includes(todo.id)}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`${todo.todoItem}`} />
                  </ListItemButton>
                </ListItem>
              );
            }
          )
        )}
      </List>
    </div>
  );
}

export default TodoItemsContainer;
