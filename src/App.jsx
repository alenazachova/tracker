import "./App.css";
import { Header } from "./components/Header";
import Main from "./components/Main";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Footer } from "./components/Footer";
import { Timer } from "./components/Timer/Timer";

function App() {
  return (
    <div className="main--container">
      {/* <Quotes /> */}
      {/* <NewInput /> */}

      <Timer />
      {/* <Header />
      <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
