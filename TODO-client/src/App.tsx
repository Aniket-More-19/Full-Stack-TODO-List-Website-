import "./App.css";
import "./styles/global.css";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import CheckIcon from "@mui/icons-material/Check";
import { TextField } from "@mui/material";

function App() {
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
    <div className="home-container">
      <div className="home-bg-img">
        <div className="img-overlay"></div>
        <img src="/src/assets/images/todo-bg.jpg" alt="home background image" />
      </div>
      <div className="empty-div"></div>

      {/** todo list container */}

      <div className="todo-list-container">
        <div className="title-container px-2 py-1">
          <h1 className="title">TODO</h1>
          <img
            className="light-dark-mode"
            src="./src/assets/icons/light-dark-icon.png"
            alt="light/dark mode icon"
          />
        </div>

        <div className="todo-input">
          <PanoramaFishEyeIcon></PanoramaFishEyeIcon>
          <TextField
            placeholder="Create a new todo..."
            color="primary"
            className="text-field"
            label=""
            variant="filled"
            slotProps={{
              input: {
                style: {
                  color: "#ffffff",
                  paddingBottom: 12,
                  fontSize: 18,
                  fontWeight: 200,
                },
                disableUnderline: true,
              },
            }}
            sx={{}}
          />
        </div>

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
                      primaryTypographyProps={{ fontSize: 18 }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <div className="bottom-actions-bar px-2">
            <h3>5 items left</h3>
            <div className="bottom-navigation">
              <h3>All</h3>
              <h3>Active</h3>
              <h3>Completed</h3>
            </div>
            <h3>Clear Completed</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
