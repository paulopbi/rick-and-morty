import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
      <h5 className={styles.text}>Loading...</h5>
    </div>
  );
};

export default Loading;
