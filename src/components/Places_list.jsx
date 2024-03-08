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
    console.log(setSearchTerm(e.target.value));
  };

  const filtered =
    data?.places ??
    [].filter((place) =>
      place.name.toLowercase().include(searchTerm.toLowercase())
    );

  return (
    <>
      <Header />
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
