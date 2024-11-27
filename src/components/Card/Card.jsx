import styles from "./Card.module.css";

const Card = ({ character }) => {
  console.log(character);

  return (
    <section className={styles.card}>
      {character &&
        character.results.map(({ id, name, status, image }) => (
          <div key={id} className={styles.character}>
            <img
              src={image}
              alt={name}
              height={168}
              width={240}
              className={styles.image}
            />

            <div className={styles.texts}>
              <h1 className={styles.title}>{name}</h1>
              <p className={styles.status}>{status}</p>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Card;
