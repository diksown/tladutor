import "./App.css";

import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import Translation from "./Translation";
import Info from "./Info";
import Credits from "./Credits";
import WebFont from "webfontloader";

function App() {
  WebFont.load({
    google: {
      families: ["Roboto", "Nunito", "Space Grotesk:400,700", "Inconsolata"],
    },
  });

  return (
    <div className="App">
      <Toaster position="bottom-right" />
      <Navbar />
      <Translation />
      <Info />
      <Credits />
    </div>
  );
}

export default App;
