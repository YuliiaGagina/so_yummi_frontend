import React from "react";
import { useGetRecipesQuery } from "../redux/recipeApi";
import Item from "./Item";

const Chicken = () => {
  const { data = [], error, isLoading } = useGetRecipesQuery();
  const Chikens = data.filter((a) => a.category === "Курица");

  return (
    <ul className="mb-8 sm:flex flex-wrap gap-24 py-6">
      {Chikens.map((recipe) => (
        <Item recipe={recipe} key={recipe.title} />
      ))}
    </ul>
  );
};

export default Chicken;
