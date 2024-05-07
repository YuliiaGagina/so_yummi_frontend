import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { useGetRecipesQuery } from "../redux/recipeApi";
import bg from "../assets/bg2.png";
import table from "../assets/unsplash_IGfIGP5ONV0.png";
import leaves from "../assets/leaves.png";
import leftLeaves from "../assets/left_leaves.png";
import Loader from "../components/Loader";
import CategoryItem from "./../components/CategoryItem";
import Button from "./../components/Button";
import { useSelector } from "react-redux";
import { getMyRecipes } from "./../redux/user/userOperations";
import { useDispatch } from "react-redux";
import { setAllRecipes } from "../redux/recipeSlice";
import { ThemeContext } from "./../components/ThemeProvider";

export default function HomePage() {
  const { data = [], error, isLoading } = useGetRecipesQuery();
  console.log(data);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const name = useSelector((state) => state?.user?.user?.name);

  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    if (isLoggedIn) dispatch(getMyRecipes());
  }, [dispatch, isLoggedIn]);

  // useState(() => {
  //   dispatch(getMyRecipes());
  // }, [dispatch]);

  const [navbarOpen, setNavbarOpen] = useState(false);
  const allCategories = [
    "Завтрак",
    "Салат",
    "Говядина",
    "Курица",
    "Паста",
    "Ягненок",
    "Свинина",
    "Десерты",
    "Другое",
  ];
  const itemsPerPage = 4;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerPage);
  };

  return error ? (
    <p>Oh no, there was an error</p>
  ) : data ? (
    <main className="overflow-x-hidden">
      <div
        className={`transform skew-x-12 absolute origin-left-bottom z-[-5] top-0 right-0 x--1 rounded-bl-lg xs:w-64 xs:right-0 xs:h-96 md:w-3/6 md:h-3/5 ${
          theme === "light" ? "bg-green" : "bg-green-90"
        }`}
      ></div>
      <div className="mb-16 ">
        <img
          className="absolute  xs:right-[-400px] xs:w-0 sm:w-96  xs:top-52 sm:top-52 sm:right-0 md:w-2/4 md:top-0"
          src={leaves}
          alt="leaves"
        />
        <img
          src={leftLeaves}
          className="absolute z-[-1]   left-0 top-20 w-32"
          alt="leftLeaves"
          width="420px"
        />
        <div className="flex  container mx-auto">
          <div className="basis-4/5 py-16">
            <h1 className="text-5xl px-16 mb-4">
              <span className="text-green-20 xs:text-center ">So</span> Yummi
            </h1>
            <p className="px-16 xs:w-64 text-lg xs:w-96 md:w-full mb-8">
              "What to cook?" is not only a recipe app, it is, in fact, your
              cookbook. You can add your own recipes to save them for the
              future.
            </p>
            {name && (
              <p className="px-16 xs:w-64 text-lg xs:w-96 md:w-full text-green-20">
                Hello dear {name || ""}! Now you can collect your own recipes!
              </p>
            )}
          </div>
          <div className="relative right-8   z-1 ">
            <img
              className="relative z-10  xs:min-w-32 xs:left-[-100px] xs:top-64 sm:top-20 sm:right-0 sm:w-96 md:top-20 md:w-full md:left-10"
              src={table}
              alt="table with food"
            />
          </div>
        </div>
      </div>

      <section className="container:lg mx-auto flex-wrap md:px-28 xs:px-4 sm:px-8  mb-9  xs:mx-auto">
        {allCategories.slice(0, visibleItems).map((item) => (
          <CategoryItem key={item._id} item={item} />
        ))}
        {visibleItems < allCategories.length && (
          <Button
            borderColor="green-20 "
            hoverBg="green-20"
            text="center"
            onClick={handleLoadMore}
          >
            Other Categories
          </Button>
        )}
      </section>
    </main>
  ) : null;
}
