import { useState } from "react";
import { BASE_URL } from "../helpers/api";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Button from "../components/Button/Button";
import styles from "./Home.module.css";
import useFetchCharacters from "../hooks/useFetchCharacters";
import ALT_LOGO from "../assets/alt_logo.png";
import Card from "../components/Card/Card";
import Error from "../helpers/Error/Error";
import Loading from "../helpers/Loading/Loading";
import Head from "../helpers/Head";

const Home = () => {
  const [inputName, setInputName] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [pages, setPages] = useState(1);

  const handleName = (e) => {
    setInputName(e.target.value);
    setPages(1);
  };

  const { data, loading, error } = useFetchCharacters(
    `${BASE_URL}/character/?page=${pages}&name=${inputName}&species=${species}&gender=${gender}&status=${status}`
  );

  return (
    <>
      <Head title="Home" description="Rick and Morty characters wiki" />

      {loading && <Loading />}

      <motion.section
        initial={{ translateX: "-100px", scale: 0.5, opacity: 0 }}
        animate={{ translateX: "0px", scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={styles.section}
      >
        <div className={styles.logo}>
          <img src={ALT_LOGO} alt="Logo" width={520} height={167} />
        </div>
        <div className={styles.filters}>
          {/* input */}
          <input
            type="text"
            id="name"
            placeholder="Filter by name..."
            className={styles.input}
            value={inputName}
            onChange={handleName}
          />

          {/* species option*/}
          <select
            name="species"
            id="species"
            className={styles.filter}
            onChange={(e) => setSpecies(e.target.value)}
          >
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

          {/* gender option*/}
          <select
            name="gender"
            id="gender"
            className={styles.filter}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>

          {/* status option*/}
          <select
            name="status"
            id="status"
            className={styles.filter}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </motion.section>

      {/* cards area */}
      <motion.main
        initial={{ translateX: "-100px", opacity: 0 }}
        animate={{ translateX: "0px", opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {error ? <Error error={error} /> : <Card data={data} />}
      </motion.main>

      {/* buttons area */}
      <div className={styles.buttonContainer}>
        <Button
          onClick={() => setPages((prev) => (prev > 1 ? prev - 1 : 1))}
          disabled={pages === 1 || error}
        >
          <ArrowLeft size={24} /> Previous
        </Button>
        <Button
          onClick={() => setPages((prev) => (prev < 42 ? prev + 1 : 42))}
          disabled={pages === 42 || error}
        >
          Next
          <ArrowRight size={24} />
        </Button>
      </div>
    </>
  );
};

export default Home;
