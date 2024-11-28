import { Link } from "react-router-dom";
import { motion } from "motion/react";
import styles from "./Card.module.css";
import Proptypes from "prop-types";

const Card = ({ data }) => {
  return (
    <section className={styles.card}>
      {data &&
        data.results.map(({ id, name, status, image }) => (
          <motion.div
            animate={{ opacity: 0, translateX: "-50px", scale: 0.8 }}
            whileInView={{ opacity: 1, translateX: "0px", scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            key={id}
            className={styles.character}
          >
            <Link to={`character/${id}`} className={styles.links}>
              <img
                src={image}
                alt={name}
                height={170}
                width={240}
                className={styles.image}
              />

              <div className={styles.texts}>
                <h1 className={styles.title}>{name}</h1>
                <p className={styles.status}>{status}</p>
              </div>
            </Link>
          </motion.div>
        ))}
    </section>
  );
};

Card.propTypes = {
  data: Proptypes.oneOfType([Proptypes.array, Proptypes.object]),
};

export default Card;
