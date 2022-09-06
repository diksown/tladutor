import "./Translation.css";
import staticData from "./static.json";
import { useState } from "react";
import cebolinha from "cebolinha";

function TranslationBoxInput({ enteredText, setEnteredText }) {
  return (
    <div className="TranslationBox TranslationInput">
      {/* <textarea
        className="TranslationArea"
        spellCheck="false"
        value={enteredText}
        onChange={(e) => setEnteredText(e.target.value)}
      /> */}
      {enteredText}
    </div>
  );
}

function TranslationBoxOutput({ enteredText }) {
  return (
    <div className="TranslationBox TranslationOutput">
      {/* <textarea
        className="TranslationArea"
        spellCheck="false"
        value={enteredText}
        readOnly
      /> */}
      {cebolinha(enteredText)}
    </div>
  );
}

function TranslationDescription() {
  return (
    <div className="TranslationDescription">
      <div>Português</div>
      <div>{`→`}</div>
      <div>Poltuguês</div>
    </div>
  );
}

function Translation() {
  const defaultText = staticData.defaultEnteredText;
  const [enteredText, setEnteredText] = useState(defaultText);

  return (
    <div className="Translation">
      <TranslationDescription />
      <div className="TranslationBoxes">
        <TranslationBoxInput
          enteredText={enteredText}
          setEnteredText={setEnteredText}
        />
        <TranslationBoxOutput enteredText={enteredText} />
      </div>
    </div>
  );
}

export default Translation;
