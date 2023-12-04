import { useNavigate } from "react-router-dom";
import { Layout } from "../Layout/Layout";
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

  const { loggedIn, email } = props;
  const navigate = useNavigate();
  const onButtonClick = () => {
    if (loggedIn) {
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <Layout>
        <div className="mainContainer">
          <div className={"titleContainer"}>
            <div>{selectGreetings}</div>
          </div>
          <div>This is app for tracking time.</div>
          <div className={"buttonContainer"}>
            <input
              className={"inputButton"}
              type="button"
              onClick={onButtonClick}
              value={loggedIn ? "Log out" : "Log in"}
            />
            {loggedIn ? <div>Your email adress is {email} </div> : null}
          </div>
        </div>
      </Layout>
    </>
  );
};
