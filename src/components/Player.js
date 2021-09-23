import { useState } from "react";
import usePlayers from "../contexts/playersContext";

const Player = ({
  name,
  image,
  matches,
  runs,
  wickets,
  setIsModalOpen,
  id,
}) => {
  const { dispatch } = usePlayers();

  const playerClickHandler = () => {
    dispatch({ type: "SET_MODAL_PLAYER_ID", payload: id });
    setIsModalOpen(true);
  };

  return (
    <div
      onClick={playerClickHandler}
      className="flex flex-col justify-center items-center bg-gray-800 text-white p-6 cursor-pointer"
    >
      <img src={image} alt="player" />
      <div className="font-medium text-lg">{name}</div>
      <div className="text-blue-600 mb-4">I P L 2 0 2 1</div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center items-stretch mx-1.5 bg-gray-900 p-2 rounded-sm text-lg font-semibold">
          <div>{matches}</div>
          <div>Matches</div>
        </div>
        <div className="flex flex-col justify-center items-stretch mx-1.5 bg-gray-900 p-2 rounded-sm px-4 text-lg font-semibold">
          <div>{runs}</div>
          <div>Runs</div>
        </div>
        <div className="flex flex-col justify-center items-stretch mx-1.5 bg-gray-900 p-2 rounded-sm text-lg font-semibold">
          <div>{wickets}</div>
          <div>Wickets</div>
        </div>
      </div>
    </div>
  );
};

export default Player;
