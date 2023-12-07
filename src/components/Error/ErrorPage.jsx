import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
      <div className={"mainContainer"}>
        <h1>404</h1>
        <Link to="/">Vrátit se na domovskou stránku.</Link>
      </div>
    </>
  );
};
