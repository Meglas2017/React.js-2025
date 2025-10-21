import { Nav } from "../Nav/Nav";
import logo from "../../assets/react.svg"

export const Header = () => {
  return (
    <header>
      <img className="logoReact" src={logo} alt="Logo de React.js" />
      <Nav />
    </header>
  );
};
