export const PopUp = (props) => {
  const { onClose } = props;
  return (
    <>
      <div className="popup">
        <svg
          width="50"
          height="50"
          fill="#3750eb"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
        >
          <path d="M25 2C12.31 2 2 12.31 2 25s10.31 23 23 23 23-10.31 23-23S37.69 2 25 2zm0 2c11.61 0 21 9.39 21 21s-9.39 21-21 21S4 36.61 4 25 13.39 4 25 4zm9.988 10.988a1 1 0 0 0-.816.451L23.97 30.477 16.68 23.71a1 1 0 1 0-1.36 1.467l8.996 8.347 11.512-16.964a1 1 0 0 0-.84-1.573z" />
        </svg>
        <h3>Timer saved successfully</h3>
        <button className={"inputButton mb-1"} onClick={onClose}>
          OK
        </button>
        <div>
          <small>
            <a href="/create-invoice">Create an invoice?</a>
          </small>
        </div>
      </div>
    </>
  );
};
