import FlowerCard from "./FlowerCard";
import "./flowers.css";

const flowers = [
  {
    id: 1,
    type: "🌻",
    title: "Sunflower of Happiness",
    image: "/images/swathi-flower-1.jpg",
    message:
      "May your life always turn toward happiness, just like a sunflower follows the sun."
  },

  {
    id: 2,
    type: "🌹",
    title: "Rose of Love",
    image: "/images/swathi-flower-2.jpg",
    message:
      "You deserve all the love, kindness, and beautiful moments this world can offer."
  },

  {
    id: 3,
    type: "🌷",
    title: "Tulip of New Dreams",
    image: "/images/swathi-flower-3.jpg",
    message:
      "May this new year of your life bring wonderful adventures and unforgettable memories."
  }
];

function FlowerGarden() {
  return (
    <section
      className="flower-section"
      id="flowers"
    >
      <div className="flower-header">

        <h2>
          A Garden For Swathi 🌸
        </h2>

        <p>
          Every flower blooms with
          a special wish for your birthday.
        </p>

      </div>

      <div className="flower-grid">
        {flowers.map((flower) => (
          <FlowerCard
            key={flower.id}
            flower={flower}
          />
        ))}
      </div>
    </section>
  );
}

export default FlowerGarden;