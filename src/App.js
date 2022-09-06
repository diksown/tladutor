import "./App.css";

import Navbar from "./Navbar";
import Info from "./Info";
import Translation from "./Translation";
import WebFont from "webfontloader";

function App() {
  WebFont.load({
    google: {
      families: ["Nunito", "Space Grotesk:400,700", "sans-serif"],
    },
  });

  return (
    <div className="App">
      <Navbar />
      <Translation />
      <Info />
    </div>
  );
}

export default App;
