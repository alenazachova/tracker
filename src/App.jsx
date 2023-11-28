import "./App.css";
import { Header } from "./components/Header";
import Main from "./components/Main";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Footer } from "./components/Footer";
import { Counter } from "./components/Counter/Counter";
import { StateTry } from "./components/StateTry";
import { Quotes } from "./components/Quotes";
import { NewInput } from "./components/NewInput";

function App() {
  return (
    <div className="main--container">
      {/* <Quotes /> */}
      {/* <NewInput /> */}

      <Counter />
      {/* <Header />
      <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
