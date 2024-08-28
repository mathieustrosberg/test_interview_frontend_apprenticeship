import "./App.css";

import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Greeting name="John" />
      <Counter />
    </>
  );
}

export default App;
