import React from "react";
import { useGetRecipesQuery } from "../redux/recipeApi";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Deserts = () => {
  const [chicken, setChicken] = useState([]);
  const { data = [], error, isLoading } = useGetRecipesQuery();

  const style = {
    backgroundColor: "white",
  };
  useEffect(() => {
    if (data.length > 0) {
      const deserts = data.filter((el) => el.category === "Десерты");
      setChicken(deserts);
    }
  }, [data]);

  return (
    <section className="container mx-auto">
      <h2 className="text-4xl text-gray-100 font-semibold mb-8 rounded-md">
        {" "}
        Десерты
      </h2>
      <ul className=" mb-8">
        {" "}
        {chicken.map((recipe) => (
          <li key={recipe.id}>
            {" "}
            <NavLink
              className="relative  ease-in-out duration-500"
              to={`${recipe.id}`}
            >
              <div className="w-72 h-52 overflow-hidden rounded-md flex-column flex-wrap justify-center relative">
                <img
                  src={recipe.photo}
                  className="w-full h-full ease-in-out duration-500 shadow-xl  rounded-md transition-transform transform hover:scale-125"
                  // width="300"
                  // height="323"
                  alt="1"
                />{" "}
                <p
                  style={style}
                  className=" py-2 px-2 w-64 text-center text-l font-semibold text-gray-90 rounded-md  z-10 relative bottom-16 left-4"
                >
                  {recipe.title}
                </p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
      <NavLink className="border-2 border-green-20 py-2 px-1 text-center rounded-xl w-14 bg-green-20 block ml-auto hover:border-black ">
        Se all
      </NavLink>
    </section>
  );
};

export default Deserts;
