import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

import React from "react";

const GetCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default GetCategories;
