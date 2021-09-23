import React, {
  createContext,
  useState,
  useEffect,
  useReducer,
  useContext,
} from "react";

import { KKR } from "../data.json";

export const PlayersContext = createContext();

export const PlayersContextProvider = ({ children }) => {
  const initialState = {
    players: [...KKR],
    searchedAndSortedPlayers: [],
    modalPlayerId: -1,
    sortBy: null,
    searchText: null,
  };

  const PlayerReducer = (state, { type, payload }) => {
    switch (type) {
      case "SORT_BY":
        return { ...state, sortBy: payload };
      case "SET_MODAL_PLAYER_ID":
        return { ...state, modalPlayerId: payload };
      case "SET_SEARCH_TEXT":
        if (payload) {
          return { ...state, searchText: payload };
        }
        return { ...state, searchText: null };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(PlayerReducer, initialState);

  const getSortedPlayers = (players, sortBy) => {
    return sortBy
      ? players.sort((a, b) => {
          if (a[sortBy] < b[sortBy]) return -1;
          if (a[sortBy] > b[sortBy]) return 1;
          return 0;
        })
      : players;
  };

  const getSearchedPlayers = (searchText, players) => {
    return searchText
      ? players.filter((player) =>
          player.name.toLowerCase().includes(searchText.toLowerCase())
        )
      : players;
  };

  const sortedPlayers = getSortedPlayers(state.players, state.sortBy);

  const searchedAndSortedPlayers = getSearchedPlayers(
    state.searchText,
    sortedPlayers
  );

  return (
    <PlayersContext.Provider
      value={{ ...state, dispatch, searchedAndSortedPlayers }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

const usePlayers = () => {
  return useContext(PlayersContext);
};

export default usePlayers;
