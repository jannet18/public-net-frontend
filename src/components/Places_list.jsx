// import React, { useEffect, useMemo, useState } from "react";
import { useState } from "react";
import { useGetPublicPlacesQuery } from "../state/Api.js";
import Header from "./Header.jsx";
// import { places } from "state/index.jsx";

const Places_list = () => {
  // state as a minimum set of parameters that fully reprresnts
  // what you want to render on the screen
  // show loading :Boolean
  // loaded places : [] => get filled
  const { data } = useGetPublicPlacesQuery();
  const [searchTerm, setSearchTerm] = useState("");
  // const [filteredData, setFilteredData] = useState(data);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = (e) => {
    setSearchTerm(e.target.value);
    console.log("search clicked! Searching for:", searchTerm);
  };

  const filtered =
    data?.places ??
    [].filter((place) =>
      place.name.toLowercase().include(searchTerm.toLowercase())
    );

  return (
    <>
      <header className="bg-slate-900 flex align-center justify-between  text-gray-300 relative p-6">
        <h1>Netspeed</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onClick={handleClick}
          onChange={handleSearchChange}
          className="bg-slate-600 border-none rounded-sm outline-none w-48 cursor-pointer px-4"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 absolute top-7 right-64"
          onClick={handleClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke=""
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </header>
      {/* <Header handleSearchChange={handleSearchChange} /> */}
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto bg-slate-900 text-gray-500">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          {(filtered ?? [])?.map((place, index) => (
            <div key={index}>
              <table className="min-w-full leading-normal table-auto">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Most Recent Download Speed</th>
                    <th>Most Recent Download Units</th>
                    <th>Number of Speed Tests</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{place.name}</td>
                    <td>{place.city}</td>
                    <td>{place.most_recent_download_speed}</td>
                    <td>{place.most_recent_download_units}</td>
                    <td>{place.number_of_measurements}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Places_list;
