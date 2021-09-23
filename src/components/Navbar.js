import React from "react";
import usePlayers from "../contexts/playersContext";
import Dropdown from "./Dropdown";

export default function Navbar({ fixed }) {
  const { dispatch } = usePlayers();
  return (
    <>
      <nav className=" bg-gray-800 mb-3 text-white py-4">
        <div className="flex sm:flex-col sm:justify-between sm:items-center lg:flex-row lg:justify-between lg:items-center mx-auto w-11/12 m-auto">
          <h1 className="text-xl font-bold">KKR - 2021</h1>
          <div className="flex items-center justify-between sm:w-2/6 lg:w-2/6 flex-shrink-0">
            <input
              type="text"
              placeholder="Search here..."
              onChange={(e) =>
                dispatch({ type: "SET_SEARCH_TEXT", payload: e.target.value })
              }
              className="px-2 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring sm:w-2/6 lg:w-3/6 placeholder-black::placeholder text-black"
            />
            <div className="flex items-center justify-end sm:w-full lg:w-3/6">
              <div className="mr-2">Sort:</div> <Dropdown />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
