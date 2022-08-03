import { useEffect } from "react";
import { useState } from "react";
import Movie from "../Movie/Movie";

const MovieContainer = () => {
  const [movie, setMovie] = useState([]);
  const urlApi =
    "https://api.themoviedb.org/4/list/1?api_key=281ba2168b1ae32fe373f4735451daa8";

  useEffect(() => {
    fetch(urlApi)
      .then((res) => res.json())
      .then((data) => setMovie(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {movie.map((element) => {
        <div key={element.id}>
          <Movie
            title={element.title}
            poster_path={element.poster_path}
            vote_average={element.vote_average}
            overview={element.overview}
          />
        </div>;
      })}
    </div>
  );
};
export default MovieContainer;
