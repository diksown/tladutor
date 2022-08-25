import "./Translation.css";
import "./Common.css";
import staticData from "./static.json";
import { useState } from "react";

// From github.com/theuves-projects/cebolinha
function cebolinha(text) {
  return text
    .replace(/r(?=(l|L))/g, "u")
    .replace(/R(?=(l|L))/g, "U")
    .replace(/r+(?!\b)/g, "l")
    .replace(/R+(?!\b)/g, "L");
}

function TranslationBoxInput({ enteredText, setEnteredText }) {
  return (
    <div className="TranslationBoxInput Card Balloon">
      <textarea
        className="TranslationArea"
        cols="30"
        rows="20"
        value={enteredText}
        onChange={(e) => setEnteredText(e.target.value)}
      />
    </div>
  );
}

function TranslationBoxOutput({ enteredText }) {
  return (
    <div className="TranslationBoxOutput Card Balloon">
      <textarea
        className="TranslationArea"
        cols="30"
        rows="20"
        value={cebolinha(enteredText)}
      />
    </div>
  );
}

function Translation() {
  const defaultText = staticData.defaultEnteredText;
  const [enteredText, setEnteredText] = useState(defaultText);

  return (
    <div className="Translation">
      <TranslationBoxInput
        enteredText={enteredText}
        setEnteredText={setEnteredText}
      />
      <TranslationBoxOutput enteredText={enteredText} />
    </div>
  );
}

export default Translation;
