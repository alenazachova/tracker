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

  // spread the old list to new (doesnt change the old one), prop is index, splice delete last item on first index, and set new list
  const removeToDo = (index) => {
    const removeList = [...toDoList];

    removeList.splice(index, 1);
    setToDoList(removeList);
  };

  //i don't want to save in li input value until is empty string in inputvalue
  return (
    <>
      {/* <input type="text" onChange={handleChange} value={inputValue} />
      <button onClick={handleAdd}>Přidat popis</button> */}
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
