import Movie from "../Movie/Movie";

const MovieCollection = ({ movies }) => {
  return movies.map((movie) => {
    <Movie key={movie.id} movie={movie} />;
  });
};
export default MovieCollection;
