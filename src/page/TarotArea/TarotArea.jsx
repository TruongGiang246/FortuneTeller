import { useState } from "react";
import { motion } from "framer-motion";
import "./TarotAreaStyle.css";

const TarotCard = ({ frontImage, backImage }) => {
    const [flipped, setFlipped] = useState(false);
  
    return (
      <motion.div
        className="tarot-card"
        onClick={() => setFlipped(!flipped)}
        animate={{ rotateY: flipped ? 0 : 180 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="card-inner">
          <img
            src={flipped ? frontImage : backImage}
            alt="Tarot Card"
            className="card-face"
          />
        </div>
      </motion.div>
    );
  };
  
  const TarotReading = () => {
    const cards = [
      { front: "/images/card1.jpg", back: "/images/back.webp" },
      { front: "/images/card2.jpg", back: "/images/back.webp" },
      { front: "/images/card3.jpg", back: "/images/back.webp" }
    ];
  
    return (
      <div className="tarot-container">
        {cards.map((card, index) => (
          <TarotCard key={index} frontImage={card.front} backImage={card.back} />
        ))}
      </div>
    );
  };
  
  export default TarotReading;
  