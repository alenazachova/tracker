import { Footer } from "../Footer";
import { Logo } from "../Logo";

export const Layout = (props) => {
  const { children } = props;
  return (
    <>
      {children}
      <Footer />
    </>
  );
};
