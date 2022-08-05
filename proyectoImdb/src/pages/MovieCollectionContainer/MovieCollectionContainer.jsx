import { useEffect, useState } from "react";
// import MovieCollection from "../../components/Collection/MovieCollection";
import Movie from "../../components/Movie/Movie";

const MovieCollectionContainer = () => {
  const [movies, setMovies] = useState([]);

  const api =
    "https://api.themoviedb.org/4/list/1?api_key=281ba2168b1ae32fe373f4735451daa8";

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetch(api);
      const data = await response.json();

      console.log(data.results);
      setMovies(data.results);
    };
    getMovie();
  }, []);

  return (
    <div>
      {/* <MovieCollection movies={movies} /> */}
      {/* //         <Movie key={movie.id} movie={movie} /> */}
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieCollectionContainer;
