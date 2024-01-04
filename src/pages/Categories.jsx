import React from "react";
// import { Outlet } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      Это страница категорий
      <div>
        <Link to="breakfast">Завтрак</Link>
        <Link to="salad">Салат</Link>
        <Link to="beef">Говядина</Link>
        <Link to="chicken">Курица</Link>
        <Link to="pasta">Паста</Link>
        <Link to="deserts">Десерты</Link>
        <Link to="lamb">Ягненок</Link>
        <Link to="pork">Свинина</Link>
        <Link to="other">Другое</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Categories;
