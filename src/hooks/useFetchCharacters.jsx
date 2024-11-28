import { useEffect, useState } from "react";

const useFetchCharacters = (URL) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(URL);
        const resp = await req.json();

        if (!req.ok) {
          setData(null);
          throw new Error(
            "Oops! No characters found. 🤷‍♂️ Try again with other filters."
          );
        }

        setData(resp);
        setError("");
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [URL]);

  return { data, loading, error };
};

export default useFetchCharacters;
