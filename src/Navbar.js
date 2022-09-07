import "./Navbar.css";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <div className="Navbar">
      <a href="." id="AppLogo">
        不 tladutor
      </a>
      <a href="https://github.com/diksown/tladutor" id="GithubLogo">
        <FaGithub size="2em" />
      </a>
    </div>
  );
}

export default Navbar;
