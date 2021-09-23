import Navbar from "./components/Navbar";
import Player from "./components/Player";
import PlayerModal from "./components/PlayerModal";
import CrossIcon from "./components/CrossIcon";
import usePlayers from "./contexts/playersContext";
import { useState } from "react";

function App() {
  const { searchedAndSortedPlayers } = usePlayers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="App bg-gray-900 min-h-screen font-sans text-center">
      <PlayerModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {isModalOpen && <CrossIcon setIsModalOpen={setIsModalOpen} />}
      <Navbar />
      <div className="w-11/12 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-x-7 gap-y-7 mt-16">
          {searchedAndSortedPlayers.map((player) => (
            <Player
              {...player}
              key={player.id}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          ))}
        </div>
        {searchedAndSortedPlayers.length === 0 && (
          <div className="mx-auto font-extrabold text-6xl text-white">
            No player with this name
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
