import HeroBeach from "./components/HeroBeach/HeroBeach";
import FlowerGarden from "./components/FlowerGarden/FlowerGarden";
import MemoryBeach from "./components/MemoryBeach/MemoryBeach";
import MessageBottle from "./components/MessageBottle/MessageBottle";

function App() {
  return (
    <div className="app">
      <HeroBeach />

      <FlowerGarden />

      <MemoryBeach />

      <MessageBottle />
    </div>
  );
}

export default App;