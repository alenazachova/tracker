//pocitadlo

import { useState } from "react";

//vypisu cislo co mam
//tlacitko - > zvysim o jedno

const defaultValue = 0;
export const StateTry = () => {
  //aktualni stav, setState (ten mi to nastavi), za useState je defaultni hodnota
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
