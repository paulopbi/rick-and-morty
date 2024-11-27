import styles from "./Error.module.css";

const Error = ({ error }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <strong className={styles.error}>{error}</strong>
      </div>
    </div>
  );
};

export default Error;
