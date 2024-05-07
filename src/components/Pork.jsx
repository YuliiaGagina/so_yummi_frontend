import React from "react";
import { useGetRecipesQuery } from "../redux/recipeApi";
import Item from "./Item";

const Pork = () => {
  const { data = [], error, isLoading } = useGetRecipesQuery();
  const Porks = data.filter((a) => a.category === "Свинина");

  return (
    <ul className="mb-8 sm:flex flex-wrap gap-24 py-6">
      {Porks.map((recipe) => (
        <Item recipe={recipe} key={recipe.title} />
      ))}
    </ul>
  );
};

export default Pork;
