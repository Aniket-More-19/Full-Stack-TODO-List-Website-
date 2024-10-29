import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import CheckIcon from "@mui/icons-material/Check";

import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import React from "react";

export function TodoItemsContainer() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <div className="todo-items-container">
      <List
        sx={{
          width: "100%",
          bgcolor: "#2f283e",
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6].map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
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
                onClick={handleToggle(value)}
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
                    checked={checked.includes(value)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={`Line item ${value + 1}`}
                  // primaryTypographyProps={{ fontSize: 18 }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default TodoItemsContainer;
