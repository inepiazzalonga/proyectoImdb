import { useEffect, useState } from "react";
import MovieContainer from "../../components/Collection/MovieCollection";

const MovieCollectionContainer = () => {
  const [movies, setMovies] = useState([]);

  const urlApi =
    "https://api.themoviedb.org/3/list/1?api_key=281ba2168b1ae32fe373f4735451daa8";

  useEffect(() => {
    fetch(urlApi)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      {movies.length > 0 ? (
        <div className="container">
          <div className="grid">
            {movies.map((element) => (
              <MovieContainer key={element.id} {...element} />
            ))}
          </div>
        </div>
      ) : (
        <h2>no hay pelis</h2>
      )}
    </div>
  );
};

export default MovieCollectionContainer;
