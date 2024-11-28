import Proptypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ children, disabled, ...props }) => {
  return (
    <button className={styles.button} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: Proptypes.node,
  disabled: Proptypes.oneOfType([Proptypes.bool, Proptypes.string]),
};

export default Button;
