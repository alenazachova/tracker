import { useState } from "react";

const emojis = ["ahoj", "cau", "cus", "zdar", "nazdar"];

export const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [listQuote, setListQuote] = useState([]);

  const handleAdd = () => {
    //spred = field instead of string
    const newListQuote = [...listQuote, quote];

    setListQuote(newListQuote);
  };
  const handleRemove = () => {};

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setQuote(inputValue);
  };

  return (
    <>
      <input type="text" onChange={handleChange} value={quote} />
      <button onClick={handleAdd}>Uložit citát</button>
      <ol>
        {listQuote.map((singleQuote) => {
          return (
            <>
              <li>{singleQuote} </li>
            </>
          );
        })}
      </ol>

      <ul>
        {listQuote.map((singleQuote) => {
          return (
            <>
              <li>{singleQuote}</li>
            </>
          );
        })}
      </ul>
      <div>
        {listQuote.map((singleQuote) => {
          return <p>🥶 {singleQuote}</p>;
        })}
      </div>
      <div>
        {listQuote.map((singleQuote, index) => {
          return (
            <p>
              {index + 1} {singleQuote}
            </p>
          );
        })}
      </div>
      <div>{emojis[2]}</div>

      {listQuote.map((singleQuote, index) => {
        return (
          <p>
            {emojis[index]} {singleQuote}
          </p>
        );
      })}
      <div>
        {emojis.map((emo) => {
          return <p>{emo}</p>;
        })}
      </div>
    </>
  );
};
