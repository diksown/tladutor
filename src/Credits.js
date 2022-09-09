import "./Credits.css";

function Credits() {
  return (
    <div className="Credits">
      <div>
        不 Feito com 💚 por{" "}
        <a className="SimpleLink" href="https://dikson.xyz/">
          Dikson Santos
        </a>
      </div>
      <div>
        <a
          className="SimpleLink"
          href="https://docs.google.com/forms/d/e/1FAIpQLScfiAeJfj5WJ13omPXm3CouMIj6as0wY1HXtpmKsMdNlFmvcA/viewform"
        >
          Feedback
        </a>
        {" | "}
        <a className="SimpleLink" href="https://github.com/diksown/tladutor">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Credits;
