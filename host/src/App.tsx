// @ts-ignore
import React16App from "remoteApp/App";
// @ts-ignore
import React16WebpackApp from "remoteWebpackApp/WebpackApp";
import CounterProvider from "./context/CounterContext/CounterProvider";

function App() {
  return (
    <CounterProvider>
      <div>
        <h1>This is the host</h1>

        <React16App />
        <React16WebpackApp />
      </div>
    </CounterProvider>
  );
}

export default App;
