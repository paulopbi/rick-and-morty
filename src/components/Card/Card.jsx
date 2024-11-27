import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import Proptypes from "prop-types";

const Card = ({ data }) => {
  return (
    <section className={styles.card}>
      {data &&
        data.map(({ id, name, status, image }) => (
          <div key={id} className={styles.character}>
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
          </div>
        ))}
    </section>
  );
};

Card.propTypes = {
  data: Proptypes.array,
};

export default Card;
