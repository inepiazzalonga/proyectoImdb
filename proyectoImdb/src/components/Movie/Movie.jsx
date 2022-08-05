import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./movie.css";

const Movie = ({ movie }) => {
  return (
    <div className="movieCard">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
      />
      <h3>{movie.title}</h3>
      <h3>Popularidad {movie.popularity}</h3>
      {movie.video ? (
        <button>Ver preview</button>
      ) : (
        <h4>Este video no contiene vista previa</h4>
      )}
      {movie.overview ? (
        <button>Ver detalle</button>
      ) : (
        <h3>No tiene descripcion</h3>
      )}
    </div>
    // <Card className="card" style={{ width: "16rem" }}>
    //   <Link>
    //     <Card.Img
    //       className="imgCard bookDetail"
    //       variant="top"
    //       src={movie.poster_path}
    //     />
    //   </Link>
    //   <Card.Body className="bodyCard">
    //     <Card.Title className="titleCard">
    //       {movie.title} - {movie.vote_average}
    //     </Card.Title>
    //     <Card.Text className="textPrice">{movie.overview}</Card.Text>
    //   </Card.Body>
    // </Card>
  );
};

export default Movie;
