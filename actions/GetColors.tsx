import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

import React from "react";

const GetColors = async (): Promise<Color[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default GetColors;
