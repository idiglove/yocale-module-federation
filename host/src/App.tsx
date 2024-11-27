// @ts-ignore
import React16App from "remoteApp/App";
// @ts-ignore
import React16WebpackApp from "remoteWebpackApp/WebpackApp";

function App() {
  return (
    <div>
      <h1>This is the host</h1>

      <React16App />
      <React16WebpackApp />
    </div>
  );
}

export default App;
