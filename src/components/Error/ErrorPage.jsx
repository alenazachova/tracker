import { Link } from "react-router-dom";
import { Layout } from "../Layout/Layout";

export const ErrorPage = () => {
  return (
    <>
      <Layout>
        <div className={"mainContainer"}>
          <h1>404</h1>
          <Link to="/">Vrátit se na domovskou stránku.</Link>
        </div>
      </Layout>
    </>
  );
};
