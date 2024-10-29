import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import { TextField } from "@mui/material";

export function TodoInput() {
  return (
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
              // fontSize: 18,
              fontWeight: 200,
            },
            disableUnderline: true,
          },
        }}
      />
    </div>
  );
}
