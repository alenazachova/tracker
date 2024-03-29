import { Link } from "react-router-dom";
import { Layout } from "../Layout/Layout";

export const ErrorPage = () => {
  return (
    <Layout>
      <div className={"mainContainer"}>
        <h1 className="errorHeading">404</h1>

        <h3 className="mb-2">
          <strong>Page not found</strong>
        </h3>

        <button className={"inputButton"}>
          <Link to="/">GO HOME</Link>
        </button>
      </div>
    </Layout>
  );
};
