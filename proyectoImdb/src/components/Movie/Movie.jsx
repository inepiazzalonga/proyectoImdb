import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Movie = ({ movie }) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
      <h1>{movie.title}</h1>
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
