import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../helpers/api";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import Error from "../helpers/Error/Error";
import useFetchCharacters from "../hooks/useFetchCharacters";
import styles from "./Character.module.css";
import Loading from "../helpers/Loading/Loading";

const Character = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetchCharacters(
    `${BASE_URL}/character/${id}`
  );

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data !== null) {
    return (
      <motion.section
        initial={{ marginLeft: "-100px", opacity: 0 }}
        animate={{ marginLeft: "auto", opacity: 1 }}
        className={styles.section}
      >
        <div className={styles.container}>
          <motion.div
            initial={{ marginLeft: "0px", opacity: 1 }}
            whileHover={{ marginLeft: "-16px", opacity: 0.8 }}
            className={styles.return}
          >
            <Link to="/" className={styles.link}>
              <ArrowLeft size={24} />
              Go back
            </Link>
          </motion.div>

          <section className={styles.profileInfo}>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className={styles.avatar}
            >
              <img src={data.image} alt={data.name} width={400} height={400} />
            </motion.div>
            <h1 className={styles.title}>{data.name}</h1>
          </section>

          {/* info */}
          <section className={styles.charInfos}>
            {/* informations */}
            <motion.div
              initial={{ marginLeft: "-100px", opacity: 0 }}
              animate={{ marginLeft: "0px", opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={styles.charInfoWrapper}
            >
              <h2 className={styles.subTitle}>About</h2>

              <article className={styles.charInfo}>
                <h3>Gender</h3>
                <span>{data.gender}</span>
              </article>

              <article className={styles.charInfo}>
                <h3>Specie</h3>
                <span>{data.species}</span>
              </article>

              <article className={styles.charInfo}>
                <h3>Status</h3>
                <span>{data.status}</span>
              </article>
            </motion.div>
            {/* episodes */}
            <motion.div
              initial={{ marginLeft: "-100px", opacity: 0 }}
              animate={{ marginLeft: "0px", opacity: 1 }}
              transition={{ delay: 1 }}
              className={styles.charInfoWrapper}
            >
              <h2 className={styles.subTitle}>Informations</h2>

              <article className={styles.charInfo}>
                <h3>Location</h3>
                <span>{data.location.name}</span>
              </article>

              <article className={styles.charInfo}>
                <h3>Origin</h3>
                <span>{data.origin.name}</span>
              </article>

              <article className={styles.charInfo}>
                <h3>Type</h3>
                <span>{data.type ? data.type : "Unknown"}</span>
              </article>
            </motion.div>
          </section>
        </div>
      </motion.section>
    );
  }
};

export default Character;
