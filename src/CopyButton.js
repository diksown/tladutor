import "./ActionButton.css";
import { MdContentCopy } from "react-icons/md";

import { IconContext } from "react-icons";
import toast from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyIcon = () => {
  return (
    <IconContext.Provider value={{ size: "30px" }}>
      <div>
        <MdContentCopy />
      </div>
    </IconContext.Provider>
  );
};

const CopyButton = ({ textToCopy }) => {
  const handleClick = (e) => {
    // e.stopPropagation();
    toast.success("Copied to clipboard!");
  };

  return (
    <CopyToClipboard text={textToCopy}>
      <button className="ActionButton" onClick={handleClick}>
        <CopyIcon />
      </button>
    </CopyToClipboard>
  );
};

export default CopyButton;
