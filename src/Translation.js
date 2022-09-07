import "./Translation.css";
import staticData from "./static.json";
import { useState } from "react";
import cebolinha from "cebolinha";
import TextareaAutosize from "react-textarea-autosize";

const TextareaAutosizeStyle = {
  width: "100%",
  resize: "none",
  height: "100%",
  border: "none",
  outline: "none",
  font: "inherit",
  color: "inherit",
  backgroundColor: "transparent",
};

function TranslationBoxInput({ enteredText, setEnteredText }) {
  return (
    <div className="TranslationBox TranslationInput">
      <TextareaAutosize
        autoFocus
        onChange={(e) => setEnteredText(e.target.value)}
        style={TextareaAutosizeStyle}
        defaultValue={enteredText}
      />
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
      <TextareaAutosize
        readOnly
        style={TextareaAutosizeStyle}
        value={cebolinha(enteredText)}
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
  const defaultText = staticData.shortRick;
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
