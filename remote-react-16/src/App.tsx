import "./App.css";
import Counter from "./components/Counter";

function App() {
  // @ts-ignore
  const CounterContext = window.CounterContext;

  if (!CounterContext) {
    return <p>CounterContext not found</p>;
  }

  return <Counter CounterContext={CounterContext} />;
}

export default App;
