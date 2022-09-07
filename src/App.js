import "./App.css";

import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import Translation from "./Translation";
import Credits from "./Credits";
import WebFont from "webfontloader";

function App() {
  WebFont.load({
    google: {
      families: ["Nunito", "Space Grotesk:400,700", "sans-serif"],
    },
  });

  return (
    <div className="App">
      <Toaster />
      <Navbar />
      <Translation />
      <Credits />
    </div>
  );
}

export default App;
