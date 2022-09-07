import "./ActionButton.css";
import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons";

const ClearIcon = () => {
  return (
    <IconContext.Provider value={{ size: "30px" }}>
      <div>
        <MdClose />
      </div>
    </IconContext.Provider>
  );
};

const ClearButton = ({ setEnteredText }) => {
  const handleClick = () => {
    setEnteredText("");
  };

  return (
    <button className="ActionButton" onClick={handleClick}>
      <ClearIcon />
    </button>
  );
};

export default ClearButton;
