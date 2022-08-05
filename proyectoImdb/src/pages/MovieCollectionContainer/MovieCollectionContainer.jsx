import { useEffect, useState } from "react";
import MovieCollection from "../../components/Collection/MovieCollection";

const MovieCollectionContainer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/list/1?api_key=281ba2168b1ae32fe373f4735451daa8"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <MovieCollection movies={movies} />
    </div>
  );
};

export default MovieCollectionContainer;
