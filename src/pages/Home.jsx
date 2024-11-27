import { LoadMore } from "../components/Button/Button";
import ALT_LOGO from "../assets/alt_logo.png";
import Card from "../components/Card/Card";
import useFetch from "../hooks/useFetch";
import styles from "./Home.module.css";

const Home = () => {
  const { data, loading } = useFetch(
    "https://rickandmortyapi.com/api/character"
  );

  return (
    <>
      {loading && <p>Carregando...</p>}
      <section className={styles.section}>
        <div className={styles.logo}>
          <img src={ALT_LOGO} alt="Logo" width={520} height={167} />
        </div>
        <div className={styles.filters}>
          {/* input */}
          <input
            type="text"
            id="name"
            placeholder="Search by name..."
            className={styles.input}
          />

          {/* species */}
          <select name="species" id="species" className={styles.filter}>
            <option value="">Species</option>
            <option value="animal">Animal</option>
            <option value="alien">Alien</option>
            <option value="disease">Disease</option>
            <option value="unknown">Unknown</option>
            <option value="human">Human</option>
            <option value="humanoid">Humanoid</option>
            <option value="mythological">Mythological</option>
            <option value="poopybutthole">Poopybutthole</option>
            <option value="robot">Robot</option>
          </select>

          {/* gender */}
          <select name="gender" id="gender" className={styles.filter}>
            <option value="">Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>

          {/* status */}
          <select name="status" id="status" className={styles.filter}>
            <option value="">Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </section>

      <main>
        <Card character={data} />
      </main>

      <div className={styles.buttonContainer}>
        <LoadMore />
      </div>
    </>
  );
};

export default Home;
