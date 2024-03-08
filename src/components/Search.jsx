import React, { useState } from "react";
import { useGetPublicPlacesQuery } from "../state/Api.js";

const Search = ({ handleSearchChange }) => {
  //     const [searchTerm, setSearchTerm] = useState("");
  //   const { data, isLoading, error } = useGetPublicPlacesQuery(searchTerm);
  //   //

  //     const handleSearchChange = (e) => {
  //       setSearchTerm(e.target.value);
  //       console.log(e.target.value);
  //     };

  //   const filteredData =
  //     data ??
  //     [].filter((item) =>
  //       item.lowerCase().include(searchTerm.toLocaleLowerCase())
  //     );
  //   console.log(filteredData);
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        // value={searchTerm}
        // onChange={handleSearchChange}
        className="bg-slate-600 border-none rounded-sm outline-none w-48 cursor-pointer"
      />
      {/* {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>} */}
      <ul>
        {/* {filteredData ?? []} */}
        {/* {filteredData ?? [].map((item, index) => <li key={index}>{item}</li>)} */}
      </ul>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-3 h-3 absolute top-8 right-64"
        onClick={handleSearchChange}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </>
  );
};

export default Search;
