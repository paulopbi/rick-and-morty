import Proptypes from "prop-types";
import styles from "./Error.module.css";
import { motion } from "motion/react";

const Error = ({ error }) => {
  return (
    <motion.div
      initial={{ translateY: "-50px", scale: 0.5, opacity: 0 }}
      animate={{ translateY: "0px", scale: 1, opacity: 1 }}
      className={styles.container}
    >
      <div className={styles.content}>
        <strong className={styles.error}>{error}</strong>
      </div>
    </motion.div>
  );
};

Error.propTypes = {
  error: Proptypes.string,
};

export default Error;
