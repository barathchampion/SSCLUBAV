// import React from "react";
// import { motion } from "framer-motion";
// import { Container } from "reactstrap";

// const Gallery = () => {
//   const galleryItems = [
//     {
//       image: "volleyball-logo-design-vector.jpg",
//       tag: "Art",
//       date: "6 min ago",
//       title: "Facere ipsa nulla corrupti praesentium",
//       description:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit ...",
//     },
//     {
//       image: "3p0f9grb.png",
//       tag: "Event",
//       date: "1 hour ago",
//       title: "Volleyball Championship 2025",
//       description:
//         "The best players of the year competing for the grand trophy. Get ready for the action!",
//     },
//     // Add more items as necessary
//   ];

//   return (
//     <Container id="gallery" className="text-center my-5">
//       <h3 className="mb-4">Club Gallery</h3>
//       <div className="d-flex justify-content-around flex-wrap">
//         {galleryItems.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: index * 0.5 }}
//             className="card m-2"
//             style={{
//               width: "18rem",
//               borderRadius: "8px",
//               boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <div className="header">
//               {/* Image is now above the tag */}
//               <div className="image">
//                 <img
//                   src={`/images/${item.image}`}
//                   alt="Gallery Item"
//                   className="card-img-top"
//                   style={{
//                     width: "100%",
//                     height: "200px", // You can adjust the height as needed
//                     objectFit: "cover", // This will ensure images are not distorted
//                   }}
//                 />
//               </div>

//               <div className="tag-container">
//                 <span className="tag">{item.tag}</span>
//               </div>

//               <div className="date">
//                 <span>{item.date}</span>
//               </div>
//             </div>
//             <div className="info">
//               <a rel="noopener noreferrer" href="#" className="block">
//                 <span className="title">{item.title}</span>
//               </a>
//               <p className="description">{item.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default Gallery;
import React from "react";
import { motion } from "framer-motion";
import { Container } from "reactstrap";
import { Link } from "react-router-dom"; // Import Link

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: "volleyball-logo-design-vector.jpg",
      tag: "Player of the Match",
      date: "6 min ago",
      title: "John Doe",
      description: "Player of the match for this game.",
    },
    {
      id: 2,
      image: "3p0f9grb.png",
      tag: "Best Attacker",
      date: "1 hour ago",
      title: "Jane Smith",
      description: "Best attacker in the last match.",
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
                <span className="title">{item.title}</span>
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

