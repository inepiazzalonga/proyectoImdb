// import { useEffect } from "react";
// import { useState } from "react";
import Movie from "../Movie/Movie";

const MovieContainer = () => {


  return (
    <div>
      {movies.map((element) => {
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
