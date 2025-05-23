
import React from "react";
import { motion } from "framer-motion";
import { Container } from "reactstrap";
import { Link } from "react-router-dom"; // Import Link

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: "3p0f9grb.png",
      tag: "2024 Player of the Match",
      date: "1yr ago",
      title: "-",
      description: "Player of the match for this game.",
    },
    {
      id: 2,
      image: "atta.png",
      tag: "2024 Best Attacker",
      date: "1yr ago",
      title: "-",
      description: "Best attacker in the last match.",
    },
    {
      id: 3,
      image: "libro.png",
      tag: "2024 Best Libro",
      date: "1yr ago",
      title: "-",
      description: "Best Libro in the last match.",
    },
    {
      id: 4,
      image: "setter.png",
      tag: "2024 Best Setter",
      date: "1yr ago",
      title: "-",
      description: "Best Setter in the last match.",
    },
    // Add more items as necessary
  ];

  return (
    <Container id="gallery" className="text-center my-5">
      <h3 className="mb-4">Club Gallery</h3>
      <div className="d-flex justify-content-around flex-wrap">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.5 }}
            className="card m-2"
            style={{
              width: "18rem",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Link to={`/player/${item.id}`} style={{ textDecoration: 'none' }}>
              <div className="header">
                <div className="image">
                  <img
                    src={`/images/${item.image}`}
                    alt="Gallery Item"
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "200px", // Adjust the height as needed
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="tag-container">
                  <span className="tag">{item.tag}</span>
                </div>

                <div className="date">
                  <span>{item.date}</span>
                </div>
              </div>
              <div className="info">
                <span className="">{item.title}</span>
                <p className="description">{item.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default Gallery;

