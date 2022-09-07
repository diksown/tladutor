import "./Translation.css";
import staticData from "./static.json";
import { useState } from "react";
import cebolinha from "cebolinha";
import TextareaAutosize from "react-textarea-autosize";
import CopyButton from "./CopyButton";
import ClearButton from "./ClearButton";

function TextareaAutosizeStyle() {
  const offset = "40px";
  return {
    marginRight: offset,
    width: `calc(100% - ${offset})`,
    resize: "none",
    height: "100%",
    border: "none",
    outline: "none",
    font: "inherit",
    color: "inherit",
    backgroundColor: "transparent",
  };
}

function TranslationBoxInput({ enteredText, setEnteredText }) {
  return (
    <div className="TranslationBox TranslationInput">
      {enteredText.length > 0 && (
        <ClearButton setEnteredText={setEnteredText} />
      )}
      <TextareaAutosize
        autoFocus
        onChange={(e) => setEnteredText(e.target.value)}
        style={TextareaAutosizeStyle()}
        value={enteredText}
      />
    </div>
  );
}

function TranslationBoxOutput({ enteredText }) {
  const cebolinhaText = cebolinha(enteredText);
  return (
    <div className="TranslationBox TranslationOutput">
      {enteredText.length > 0 && <CopyButton textToCopy={cebolinhaText} />}
      <TextareaAutosize
        readOnly
        style={TextareaAutosizeStyle()}
        value={cebolinhaText}
      />
    </div>
  );
}

function TranslationDescription() {
  return (
    <div className="TranslationDescription">
      <div></div>
      <div>Português</div>
      <div>{`→`}</div>
      <div>Cebolinha</div>
      <div></div>
    </div>
  );
}

function Translation() {
  const defaultText = staticData.longRick;
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
