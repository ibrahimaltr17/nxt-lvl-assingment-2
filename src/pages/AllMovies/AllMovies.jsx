import { useEffect, useState } from "react";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  console.log(movies);

  return (
    <div>
      <h1>All Movies</h1>
    </div>
  );
};

export default AllMovies;