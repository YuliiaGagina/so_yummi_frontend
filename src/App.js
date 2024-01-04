import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import Categories from "./pages/Categories";
import AddRecipes from "./pages/AddRecipes";
import MyRecipes from "./pages/MyRecipes";
import Favorites from "./pages/Favorites";
import ShopingList from "./pages/ShopingList";
import Search from "./pages/Search";
import Layout from "./components/Layout";
import Breakfast from "./components/Breakfast";
import Salad from "./components/Salad";
import Beef from "./components/Beef";
import Chicken from "./components/Chicken";
import Pasta from "./components/Pasta";
import Deserts from "./components/Deserts";
import Lamb from "./components/Lamb";
import Pork from "./components/Pork";
import Other from "./components/Other";
import Recipe from "./components/Recipe";
import Error from "./components/Error";
// "Завтрак",
//   "Салат",
//   "Говядина",
//   "Курица",
//   "Паста",
//   "Десерты",
//   "Ягненок",
//   "Свинина",
//   "Другое",
//   "Паста",
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:recipeId" element={<Recipe />} />
          <Route path="categories" element={<Categories />}>
            <Route path="breakfast" element={<Breakfast />}>
              <Route path=":recipeId" element={<Recipe />} />
            </Route>
            <Route path="salad" element={<Salad />} />
            <Route path="beef" element={<Beef />} />
            <Route path="chicken" element={<Chicken />} />
            <Route path="pasta" element={<Pasta />} />
            <Route path="deserts" element={<Deserts />} />
            <Route path="lamb" element={<Lamb />} />
            <Route path="pork" element={<Pork />} />
            <Route path="other" element={<Other />} />
            <Route />
          </Route>
          <Route path="addrecipes" element={<AddRecipes />} />
          <Route path="myrecipes" element={<MyRecipes />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="shopinglist" element={<ShopingList />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
