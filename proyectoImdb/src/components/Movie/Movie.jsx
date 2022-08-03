import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Movie = ({ title, poster_path, vote_average, overview }) => {
  return (
    <Card className="card" style={{ width: "16rem" }}>
      <Link>
        <Card.Img
          className="imgCard bookDetail"
          variant="top"
          src={poster_path}
        />
      </Link>
      <Card.Body className="bodyCard">
        <Card.Title className="titleCard">
          {title} - {vote_average}
        </Card.Title>
        <Card.Text className="textPrice">{overview}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Movie;
