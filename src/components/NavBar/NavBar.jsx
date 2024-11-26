import LOGO from "../../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div>
        <img src={LOGO} alt="Logo" width={50} height={50} />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Localizations</Link>
          </li>
          <li>
            <Link to="/">Episodes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
