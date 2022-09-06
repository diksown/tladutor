import "./App.css";

import AppLogo from "./AppLogo";
import Info from "./Info";
import Translation from "./Translation";
import WebFont from "webfontloader";

function App() {
  WebFont.load({
    google: {
      families: ["Roboto", "Zilla Slab", "Nunito"],
    },
  });

  return (
    <div className="App">
      <AppLogo />
      <Translation />
      <Info />
    </div>
  );
}

export default App;
