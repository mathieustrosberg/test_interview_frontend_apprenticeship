import "./App.css";

import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import NameList from "./components/NameList";

function App() {
  return (
    <>
      <Greeting name="John" />
      <Counter />
      <NameList />
    </>
  );
}

export default App;
