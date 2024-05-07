import { Routes, Route, Navigate } from "react-router-dom";
// import HomePage from "./pages/HomePage";

import Categories from "./pages/Categories";
import AddRecipes from "./pages/AddRecipes";
import MyRecipes from "./pages/MyRecipes";
import Favorites from "./pages/Favorites";
import ShopingList from "./pages/ShopingList";
import Search from "./pages/Search";
import Layout from "./components/Layout";

import Recipe from "./components/Recipe";
import Error from "./components/Error";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useDispatch } from "react-redux";
import { useEffect, Suspense, lazy } from "react";
import { refreshUser } from "./redux/user/userOperations";
import { PrivateRoute } from "./components/PrivateRoute";
import { useSelector } from "react-redux";
import { RestrictedRoute } from "./components/RestrictedRoute";
import Breakfast from "./components/Breakfast";
import Salad from "./components/Salad";
import Beef from "./components/Beef";
import Chicken from "./components/Chicken";
import Pasta from "./components/Pasta";
import Deserts from "./components/Deserts";
import Lamb from "./components/Lamb";
import Pork from "./components/Pork";
import Other from "./components/Other";
import { useLocation } from "react-router-dom";
import Loader from "./components/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isRefreshing = useSelector((state) => state.user.isRefreshUser);
  console.log(isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/" component={<LoginPage />} />
              }
            />

            <Route path="/:recipeId" element={<Recipe />} />
            <Route path="categories/" element={<Categories />}>
              <Route path="breakfast" index element={<Breakfast />}></Route>

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
            <Route path="categories/breakfast/:recipeId" element={<Recipe />} />
            <Route path="categories/salad/:recipeId" element={<Recipe />} />
            <Route path="categories/beef/:recipeId" element={<Recipe />} />
            <Route path="categories/chicken/:recipeId" element={<Recipe />} />
            <Route path="categories/pasta/:recipeId" element={<Recipe />} />
            <Route path="categories/deserts/:recipeId" element={<Recipe />} />
            <Route path="categories/lamb/:recipeId" element={<Recipe />} />
            <Route path="categories/pork/:recipeId" element={<Recipe />} />
            <Route path="categories/other/:recipeId" element={<Recipe />} />

            <Route path="addrecipes" element={<AddRecipes />} />
            {/* <PrivateRoute path="myrecipes">
            <MyRecipes />
          </PrivateRoute> */}
            <Route
              path="myrecipes"
              element={
                <PrivateRoute redirectTo="/login" component={<MyRecipes />} />
              }
            />
            <Route path="myrecipes/:recipeId" element={<Recipe />} />
            <Route path="favorites/:recipeId" element={<Recipe />} />
            <Route path="search/:recipeId" element={<Recipe />} />
            {/* <Route path="myrecipes" element={<MyRecipes />} /> */}
            <Route
              path="favorites"
              element={
                <PrivateRoute redirectTo="/login" component={<Favorites />} />
              }
            />
            <Route
              path="shopinglist"
              element={
                <PrivateRoute redirectTo="/login" component={<ShopingList />} />
              }
            />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
