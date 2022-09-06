import "./Translation.css";
import staticData from "./static.json";
import { useState } from "react";
import cebolinha from "cebolinha";

function TranslationBoxInput({ enteredText, setEnteredText }) {
  return (
    <div className="TranslationBoxInput Card Balloon">
      <textarea
        className="TranslationArea"
        spellCheck="false"
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
        spellCheck="false"
        value={cebolinha(enteredText)}
        readOnly
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
