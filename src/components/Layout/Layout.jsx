import { Footer } from "../Footer";
import { Logo } from "../Logo";

export const Layout = (props) => {
  const { children, isFullBlue, loggedIn } = props;

  return (
    <div className={"bgContainer" + isFullBlue ? "bgContainer--full-blue" : ""}>
      <Logo loggedIn={loggedIn} />
      {children}
      <Footer />
    </div>
  );
};
