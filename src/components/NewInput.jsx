import { useState } from "react";

export const NewInput = () => {
  const [newValue, setNewValue] = useState("");
  const [listValue, setListValue] = useState([]);

  const handleAdd = () => {
    if (newValue !== "") {
      const newList = [...listValue, newValue];
      setNewValue("");
      setListValue(newList);
    } else {
      alert("Vyplňťe pole");
    }
  };

  const handleChange = (event) => {
    const actualValue = event.target.value;
    setNewValue(actualValue);
  };

  return (
    <>
      <input
        placeholder="Welcome back,Ala!"
        type="text"
        onChange={handleChange}
        value={newValue}
      />
      <button onClick={handleAdd}>Přidat hodnotu</button>
      <ol>
        {listValue.map((value, index) => {
          //rest divison - number
          const rest = index % 2;
          //result of condition boolean - true
          const isOdd = rest > 0;

          //ternar operator - "string" is result
          const className = isOdd ? "bg-white" : "bg-gray";

          return (
            <>
              {/* this I put like a prop into class  */}
              <li className={className}>{value}</li>
            </>
          );
        })}
      </ol>
    </>
  );
};
