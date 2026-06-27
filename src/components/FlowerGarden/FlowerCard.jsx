import { motion } from "framer-motion";

function FlowerCard({ flower }) {
  return (
    <motion.div
      className="flower-card"
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.8
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1
      }}
      transition={{
        duration: 1,
        ease: "easeOut"
      }}
      viewport={{
        once: true
      }}
      whileHover={{
        rotateX: 10,
        rotateY: 10,
        scale: 1.05
      }}
    >
      <div className="flower-image">
        <img
          src={flower.image}
          alt={flower.title}
        />

        <div className="flower-icon">
          {flower.type}
        </div>
      </div>

      <div className="flower-content">
        <h3>
          {flower.title}
        </h3>

        <p>
          {flower.message}
        </p>
      </div>
    </motion.div>
  );
}

export default FlowerCard;