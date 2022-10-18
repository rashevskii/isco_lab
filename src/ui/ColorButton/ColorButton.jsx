import { Link } from "react-router-dom";
import './ColorButton.scss';

export const ColorButton = ({ text, location, anotherStyles }) => {
  return (
    <Link className="colorButton" to={location} style={{ ...anotherStyles }}>
      {text}
    </Link>
  );
};
