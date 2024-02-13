import { Routes, Route } from "react-router-dom";
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
import { getCurrentUser } from "./redux/user/userOperations";
import { PrivateRoute } from "./components/PrivateRoute";
import { useSelector } from "react-redux";
import { RestrictedRoute } from "./components/RestrictedRoute";

const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector((state) => state.user.isRefreshUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    isRefreshing && (
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/"
                    component={<RegisterPage />}
                  />
                }
              />

              <Route
                path="/login"
                element={
                  <RestrictedRoute redirectTo="/" component={<LoginPage />} />
                }
              />
              <Route path="/:recipeId" element={<Recipe />} />
              <Route path="categories" element={<Categories />}>
                {/* <Route path="breakfast" element={<Breakfast />}>
              <Route path=":recipeId" element={<Recipe />} />
            </Route> */}
                {/* <Route path="salad" element={<Salad />} />
            <Route path="beef" element={<Beef />} />
            <Route path="chicken" element={<Chicken />} />
            <Route path="pasta" element={<Pasta />} />
            <Route path="deserts" element={<Deserts />} />
            <Route path="lamb" element={<Lamb />} />
            <Route path="pork" element={<Pork />} />
            <Route path="other" element={<Other />} /> */}
                <Route />
              </Route>
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
              {/* <Route path="myrecipes" element={<MyRecipes />} /> */}
              <Route path="favorites" element={<Favorites />} />
              <Route path="shopinglist" element={<ShopingList />} />
              <Route path="search" element={<Search />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    )
  );
}

export default App;
