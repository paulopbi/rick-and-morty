import Proptypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: Proptypes.elementType,
};

export default Button;
