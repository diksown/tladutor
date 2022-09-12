import "./Translation.css";
import phrases from "./static.json";
import { useState, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
import CopyButton from "./CopyButton";
import ClearButton from "./ClearButton";

// Mostly taken from https://github.com/theuves-projects/cebolinha
// Fixes a bug with words with accents (três -> três instead of tlês)
function cebolinha(text) {
  return text
    .replace(/r(?=(l|L))/g, "u")
    .replace(/R(?=(l|L))/g, "U")
    .replace(/r+(?!\b)/g, "l")
    .replace(/R+(?!\b)/g, "L")
    .replace(/r(?=[À-ÖØ-ö])/g, "l")
    .replace(/R(?=[À-ÖØ-ö])/g, "L");
}

function TextareaAutosizeStyle() {
  const offset = "25px";
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
  const ref = useRef();
  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <div
      className="TranslationBox TranslationInput"
      onClick={() => handleClick()}
    >
      {enteredText.length > 0 && (
        <ClearButton setEnteredText={setEnteredText} />
      )}
      <TextareaAutosize
        ref={ref}
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
  const defaultText = phrases[Math.floor(Math.random() * phrases.length)];
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
