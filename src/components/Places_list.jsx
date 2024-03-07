import React, { useEffect, useMemo, useState } from "react";
import { useGetPublicPlacesQuery } from "../state/Api";

const Places_list = () => {
  // state as a minimum set of parameters that fully reprresnts
  // what you want to render on the screen
  // show loading :Boolean
  // loaded places : [] => get filled
  const { data } = useGetPublicPlacesQuery();
  console.log(data);
  // const [placesData] = useMemo(() => {
  //   if (!data) return [];

  //   const totalPlaces = {
  //     id: "places",
  //     data: [],
  //   };
  //   Object.values(data ?? []).map((place, index) => {
  //     totalPlaces.data = [...totalPlaces.data];
  //   });
  //   const placesData = [totalPlaces];
  //   console.log(placesData);
  //   return placesData;
  // }, [data]);

  return (
    <div>
      {data &&
        data.places.map((place, index) => (
          <table key={index}>
            <thead>
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>Recent Upload Speed</th>
                <th>Recent Upload Speed Units</th>
                <th>Number of measurements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{place.name}</td>
                <td>{place.city}</td>
                <td>{place.most_recent_download_speed}</td>
                <td>{place.most_recent_download_units}</td>
              </tr>
            </tbody>
          </table>
        ))}
    </div>
  );
};

export default Places_list;
