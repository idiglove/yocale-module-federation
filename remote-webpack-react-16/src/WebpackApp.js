import React from "react";

export default function App() {
  const CounterContext = window.CounterContext;

  if (!CounterContext) {
    return <p>CounterContext not found</p>;
  }
  return (
    <CounterContext.Consumer>
      {({ count, setCount }) => (
        <div
          style={{
            backgroundColor: "gray",
            borderRadius: "10px",
            padding: "16px",
          }}
        >
          <p>React 16 Webpack App</p>
          <p>Count from Context: {count}</p>
          <button onClick={setCount}>Count Up</button>
        </div>
      )}
    </CounterContext.Consumer>
  );
}
