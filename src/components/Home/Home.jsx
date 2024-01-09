import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const greetings = [
  "Welcome back, Ala!",
  "How are you Ala?",
  "Good to See You, Ala!",
];

export const Home = (props) => {
  const [selectGreetings, setSelectGreetings] = useState("");
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    setSelectGreetings(greetings[randomIndex]);
  }, []);

  const { loggedIn } = props;
  const navigate = useNavigate();
  const onButtonClick = () => {
    if (loggedIn) {
      navigate("/counter");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="mainContainer">
        <div className={"titleContainer"}>
          <div>{selectGreetings}</div>
        </div>
        <div>This is app for tracking time.</div>
        <div className="circle">
          <strong>Total</strong>{" "}
          <span>
            <strong>11:34</strong>
          </span>
        </div>
        <div className={"buttonContainer"}>
          <button
            className={"inputButton"}
            type="button"
            onClick={onButtonClick}
          >
            {loggedIn ? "Enter" : "Log in"}
          </button>
        </div>
      </div>
    </>
  );
};
