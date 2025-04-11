import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const PlayerDetails = () => {
  const { id } = useParams();

  // Sample player data (in real scenarios, this could come from a backend or be dynamically imported)
  const playerDetails = [
    {
      id: 1,
      name: "-",
      role: "Player of the Match",
      description: "John showed outstanding performance, making crucial plays in the final set.",
      image: "john_doe.jpg",
      achievements: ["MVP of the game", "Highest points scored", "Best defensive player"],
    },
    {
      id: 2,
      name: "-",
      role: "Best Attacker",
      description: "Jane was a key player, consistently attacking with precision and power.",
      image: "jane_smith.jpg",
      achievements: ["Most kills in the match", "Best offensive player"],
    },
    {
      id: 3,
      name: "-",
      role: "Best libro",
      description: "Jane was a key player, consistently attacking with precision and power.",
      image: "jane_smith.jpg",
      achievements: ["Most kills in the match", "Best offensive player"],
    },
    {
      id: 4,
      name: "-",
      role: "Best Setter",
      description: "Jane was a key player, consistently attacking with precision and power.",
      image: "jane_smith.jpg",
      achievements: ["Most kills in the match", "Best offensive player"],
    },
    // Add more players as necessary
  ];

  // Find the player based on the id
  const player = playerDetails.find((player) => player.id === parseInt(id));

  if (!player) {
    return <div>Player not found!</div>;
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md="4">
          <img
            src={`/images/${player.image}`}
            alt={player.name}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Col>
        <Col md="8">
          <h2>{player.name}</h2>
          <h4>{player.role}</h4>
          <p>{player.description}</p>
          <h5>Achievements:</h5>
          <ul>
            {player.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerDetails;
