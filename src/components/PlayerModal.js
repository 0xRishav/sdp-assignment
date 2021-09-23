import { useEffect, useRef } from "react";
import usePlayers from "../contexts/playersContext";

const PlayerModal = ({ isModalOpen, setIsModalOpen }) => {
  const { players, modalPlayerId } = usePlayers();
  const modalRef = useRef(null);

  const player = players.find((player) => player.id === modalPlayerId);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <>
      {isModalOpen ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-filter backdrop-blur-md">
          <div
            ref={modalRef}
            className="relative w-auto my-6 mx-auto min-w-sm bg-gray-800 text-white p-8 flex
            sm:flex-col sm:items-center sm:justify-between  lg:flex-row lg:justify-center shadow-lg"
          >
            <img src={player.image} alt="player" />
            <div className="flex flex-col sm:items-center lg:items-start">
              <div className="text-3xl font-bold mt-4 mb-6">{player.name}</div>
              <div>Nationality: {player.nationality}</div>
              <div>Matches: {player.matches}</div>
              <div>Runs: {player.runs}</div>
              <div>Wickets: {player.wickets}</div>
              <div>skills: {player.skills}</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PlayerModal;
