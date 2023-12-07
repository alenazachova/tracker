import { Link } from "react-router-dom";
import { TimeTrackerIcon } from "../icons/TimeTrackerIcon";

export const Logo = () => {
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
      </nav>
    </>
  );
};
