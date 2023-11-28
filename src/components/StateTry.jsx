//timer

import { useState } from "react";

//I write the number i have
//button - > higher + 1

const defaultValue = 0;
export const StateTry = () => {
  //actual state, setState (setter),  useState is default
  const [state, setState] = useState(defaultValue);

  const handleClick = () => {
    const newState = state + 1;
    setState(newState);
  };
  const handleMinus = () => {
    const newState = state - 1;
    setState(newState);
  };

  console.log(state);

  return (
    <>
      <p>{state}</p>
      <button onClick={handleClick}>Plus 1</button>
      <button onClick={handleMinus}>Odečtu 1</button>
    </>
  );
};
