// @ts-ignore
import React16App from "remoteApp/App";
// @ts-ignore
import React16WebpackApp from "remoteWebpackApp/WebpackApp";
import CounterProvider from "./context/CounterContext/CounterProvider";

function App() {
  return (
    <CounterProvider>
      <div className="host__wrapper">
        <h1>This is the host</h1>
        <div className='host__content'>
          <div>
            <ul>
              <li>Shared Nav Item 1</li>
              <li>Shared Nav Item 2</li>
            </ul>
          </div>
          <div>
            <React16App />
            <React16WebpackApp />
          </div>
        </div>
      </div>
    </CounterProvider>
  );
}

export default App;
