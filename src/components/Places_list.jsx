import React, { useEffect, useState } from "react";
import { useGetPublicPlacesQuery } from "../state/Api";

const Places_list = () => {
  // state as a minimum set of parameters that fully reprresnts
  // what you want to render on the screen
  // show loading :Boolean
  // loaded places : [] => get filled
  const { data } = useGetPublicPlacesQuery();
  console.log(data);

  return <div>Places_list</div>;
};

export default Places_list;
