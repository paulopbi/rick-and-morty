import { Link } from "react-router-dom";
import { ArrowLeft, Frown } from "lucide-react";
import { motion } from "motion/react";
import styles from "./NotFind.module.css";

const NotFind = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Frown size={100} />
      </div>
      <div className={styles.texts}>
        <h2>Error: 404</h2>
        <span>Page not found</span>
        <p>
          Sorry, this page you are looking doensn&#39;t exist. Go back and try
          again
        </p>
        <motion.div
          initial={{ marginLeft: "0px", opacity: 1 }}
          whileHover={{ marginLeft: "-16px", opacity: 0.8 }}
          className={styles.return}
        >
          <Link to="/" className="link">
            <ArrowLeft size={24} />
            Go back
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFind;
