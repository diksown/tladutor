import "./Navbar.css";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <div className="Navbar">
      <div id="AppLogo">不 tladutor</div>
      <a href="https://github.com/diksown/tladutor" id="GithubLogo">
        <FaGithub size="2em" />
      </a>
    </div>
  );
}

export default Navbar;
