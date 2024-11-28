import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import LOGO from "../../assets/logo.png";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <div className={styles.image}>
          <Link to="/">
            <img src={LOGO} alt="Logo" width={50} height={50} />
          </Link>
        </div>

        <ul className={styles.list}>
          <li>
            <a
              href="https://www.linkedin.com/in/paulopbi/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/paulopbi"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={24} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
