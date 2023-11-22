import { useState } from "react";

export const NewInput = () => {
  const [newValue, setNewValue] = useState("");
  const [listValue, setListValue] = useState([]);

  const handleAdd = () => {
    console.log(newValue);

    if (newValue !== "") {
      const newList = [...listValue, newValue];
      setNewValue("");
      setListValue(newList);
    } else {
      alert("Vyplň to zkurvené pole!!! 😈😤");
    }
  };

  const handleChange = (event) => {
    console.log(event.target.value);
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
          //zbytek cislo
          const rest = index % 2;
          //vysledek podminky boolean - true
          const isOdd = rest > 0;

          //ternar - string je vysledek
          const className = isOdd ? "bg-white" : "bg-gray";

          return (
            <>
              {/* to vložim jako prop do clasy */}
              <li className={className}>{value}</li>
            </>
          );
        })}
      </ol>
    </>
  );
};
