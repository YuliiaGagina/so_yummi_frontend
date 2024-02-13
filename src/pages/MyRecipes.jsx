import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useGetAllRecipeForUserQuery } from "../redux/recipeApi";
import { getMyRecipes } from "./../redux/user/userOperations";

const MyRecipes = () => {
  const resipes = useSelector((state) => state.recipe.recipes);
  const dispatch = useDispatch();
  useState(() => {
    dispatch(getMyRecipes());
  }, [dispatch]);
  return (
    <div>
      <div>мои рецепти</div>
      {resipes && resipes.map((el) => <div key={el._id}>{el.title}</div>)}
    </div>
  );
};

export default MyRecipes;
