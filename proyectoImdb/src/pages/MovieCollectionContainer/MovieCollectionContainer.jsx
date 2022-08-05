import { useEffect, useState } from "react";
import MovieCollection from "../../components/Collection/MovieCollection";

const MovieCollectionContainer = () => {
  const [movies, setMovies] = useState([]);

  const api =
    "https://api.themoviedb.org/3/list/1?api_key=281ba2168b1ae32fe373f4735451daa8";

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetch(api);
      const data = await response.json();

      console.log(data.items[0]);
      setMovies(data.items);
      movies.forEach((el) => {
        const { poster_path } = el;
        console.log(poster_path);
      });
    };
    getMovie();
  }, []);

  return (
    <div>
      <MovieCollection movies={movies} />
    </div>
  );
};

export default MovieCollectionContainer;
