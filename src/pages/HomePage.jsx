import React from "react";
import Breakfast from "./../components/Breakfast";
import { useGetRecipesQuery } from "../redux/recipeApi";
import bg from "../assets/bg2.png";
import table from "../assets/unsplash_IGfIGP5ONV0.png";
import leaves from "../assets/leaves.png";
import leftLeaves from "../assets/left_leaves.png";
import Loader from "../components/Loader";
import Salad from "./../components/Salad";
import Beef from "./../components/Beef";
import Chicken from "./../components/Chicken";
import Pasta from "./../components/Pasta";
import Deserts from "./../components/Deserts";
import Lamb from "./../components/Lamb";
import Pork from "../components/Pork";

const HomePage = () => {
  const { data = [], error, isLoading } = useGetRecipesQuery();

  // if (isLoading) return <h2>Loading...</h2>;
  if (data.length > 0) {
    const breakfast = data.filter((el) => el.category === "Завтрак");
    const salat = data.filter((el) => el.category === "Салат");
    const beef = data.filter((el) => el.category === "Говядина");
    const chicken = data.filter((el) => el.category === "Курица");
    const pasta = data.filter((el) => el.category === "Паста");
    const deserts = data.filter((el) => el.category === "Десерты");
    const lamb = data.filter((el) => el.category === "Ягненок");
    const pork = data.filter((el) => el.category === "Свинина");
  }
  const style = {
    backgroundImage: "url(" + bg + ")",
    width: "500px",
    height: "500px",
    backgroundPosition: "- 200",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return error ? (
    <p>Oh no, there was an error</p>
  ) : isLoading ? (
    <Loader />
  ) : data ? (
    <main className="">
      <div className="absolute top-0 right-0 -z-1" style={style}></div>
      <div className="mb-16">
        <img
          className="absolute right-0 top-0 "
          src={leaves}
          width="676px"
          height={944}
          alt="leaves"
        />
        <img
          src={leftLeaves}
          className="absolute left-0 top-0"
          alt="leftLeaves"
        />
        <div className="flex     container mx-auto">
          <div className="basis-4/5 py-16">
            <h1 className="text-5xl px-16 mb-4">
              <span className="text-green-20 ">So</span> Yummi
            </h1>
            <p className="px-16 text-lg">
              "What to cook?" is not only a recipe app, it is, in fact, your
              cookbook. You can add your own recipes to save them for the
              future.
            </p>
          </div>
          <div className="relative right-8   z-1 ">
            <img
              className="relative z-10"
              src={table}
              width={578}
              height={539}
              alt="table with food"
            />
          </div>
        </div>
      </div>

      <Breakfast />
      <Salad />
      <Beef />
      <Chicken />
      <Pasta />
      <Lamb />
      <Pork />
      <Deserts />
    </main>
  ) : null;
};

export default HomePage;
