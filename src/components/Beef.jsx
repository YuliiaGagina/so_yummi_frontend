import React from "react";
import { useGetRecipesQuery } from "../redux/recipeApi";
import Item from "./Item";

const Beef = () => {
  const { data = [], error, isLoading } = useGetRecipesQuery();
  const Beefs = data.filter((a) => a.category === "Говядина");

  return (
    <ul className="mb-8 sm:flex flex-wrap gap-24 py-6">
      {Beefs.map((recipe) => (
        <Item recipe={recipe} key={recipe.title} />
      ))}
    </ul>
  );
};

export default Beef;
