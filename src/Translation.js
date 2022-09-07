import "./Translation.css";
import staticData from "./static.json";
import { useState } from "react";
import cebolinha from "cebolinha";
import TextareaAutosize from "react-textarea-autosize";
import CopyButton from "./CopyButton";

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
      <TextareaAutosize
        autoFocus
        onChange={(e) => setEnteredText(e.target.value)}
        style={TextareaAutosizeStyle()}
        defaultValue={enteredText}
      />
    </div>
  );
}

function TranslationBoxOutput({ enteredText }) {
  const cebolinhaText = cebolinha(enteredText);
  return (
    <div className="TranslationBox TranslationOutput">
      <CopyButton textToCopy={cebolinhaText} />
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
          enteredText={defaultText}
          setEnteredText={setEnteredText}
        />
        <TranslationBoxOutput enteredText={enteredText} />
      </div>
    </div>
  );
}

export default Translation;
