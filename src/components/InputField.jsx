//textove pole, hodnota pole ve stavu, hodnota stavu vypisu pod polem

import { useState } from "react";

export const InputField = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    console.log(inputValue);
    if (inputValue.length !== 0) {
      const newList = [...toDoList, inputValue];
      setToDoList(newList);

      setInputValue("");
    } else {
      alert("Přidejte text do pole.");
    }
  };

  const removeToDo = (index) => {
    const removeList = [...toDoList];

    removeList.splice(index, 1);
    setToDoList(removeList);
  };

  //funkce, remove todo , ziska index, v prop bude mit index, z toho to do list pole bude mazat prvek na indexu, a bude nastavovat nove pole do toho stavu

  //nechci ukladat do li input value pokud je v inputvalue prazdny string
  return (
    <>
      <input type="text" onChange={handleChange} value={inputValue} />
      <button onClick={handleAdd}>Přidat popis</button>
      <ol>
        {toDoList.map((toDo, index) => {
          console.log(toDo);
          return (
            <li key={toDo}>
              {toDo}
              <button
                onClick={() => {
                  removeToDo(index);
                }}
              >
                x
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
};
