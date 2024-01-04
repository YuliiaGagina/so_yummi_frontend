import React from "react";
import { useParams } from "react-router-dom";

// делаем запрос по айдишнику и рендерим всю инфу

const Recipe = () => {
  const { recipeId } = useParams();
  return <div>{recipeId}</div>;
};

export default Recipe;
