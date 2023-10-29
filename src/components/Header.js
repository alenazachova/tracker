import { Button, IconButton } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import Timer from "./Timer.js";

export const Header = () => {
  return (
    <nav>
      <div>
        <h1>Tracker</h1>
      </div>
      <div className="nav--counter_section">
        <IconButton aria-label="delete">
          <FolderIcon color="primary" />
        </IconButton>
        <Timer />
        <Button variant="contained">Start</Button>
      </div>
    </nav>
  );
};
