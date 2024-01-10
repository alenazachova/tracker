import { Link, useNavigate } from "react-router-dom";
import { TimeTrackerIcon } from "../icons/TimeTrackerIcon";
import { IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

export const Logo = (props) => {
  const token = localStorage.getItem("userToken");

  const isLoggedIn = token ? true : false;
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };

  return (
    <>
      <nav>
        <h2>
          <Link to="/">
            <span className="highlight-container">
              <span className="highlight">
                <TimeTrackerIcon />
                TimeTracker
              </span>
            </span>
          </Link>
        </h2>
        {isLoggedIn && (
          <IconButton
            sx={{
              paddingRight: "0",
              border: "1px solid #3750eb",
              ":hover": { color: "#fff", border: "1px solid #c4d3fc" },
            }}
            onClick={logOut}
          >
            <LogoutIcon sx={{ color: "#c4d3fc" }} />
          </IconButton>
        )}
      </nav>
    </>
  );
};
