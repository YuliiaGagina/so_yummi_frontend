import React, { useEffect } from "react";
// import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/categories/breakfast");
  }, []);
  return (
    <div className="container mx-auto py-8">
      <h1 className="py-8 mb-4 text-4xl font-semibold">Категории</h1>
      <div className="flex flex-wrap gap-12 text-xl h-24  text-gray-10 border-b-2 border-gray-10 ">
        <Link
          className=" hover:text-green-20 py-8 hover:border-green-20 hover:border-b-2 border-gray-10"
          to="breakfast"
        >
          Завтрак
        </Link>
        <Link
          className=" hover:text-green-20 py-8 hover:border-green-20 hover:border-b-2  border-gray-10"
          to="salad"
        >
          Салат
        </Link>
        <Link
          className=" hover:text-green-20 py-8 hover:border-green-20 hover:border-b-2  border-gray-10"
          to="beef"
        >
          Говядина
        </Link>
        <Link
          className=" hover:text-green-20 py-8 hover:border-green-20  hover:border-b-2 border-gray-10"
          to="chicken"
        >
          Курица
        </Link>
        <Link
          className=" hover:text-green-20 py-8 hover:border-green-20 hover:border-b-2  border-gray-10"
          to="pasta"
        >
          Паста
        </Link>
        <Link
          className=" hover:text-green-20 py-8 hover:border-green-20 hover:border-b-2 border-gray-10"
          to="deserts"
        >
          Десерты
        </Link>
        <Link
          className=" hover:text-green-20 py-8 hover:border-green-20 hover:border-b-2 border-gray-10"
          to="lamb"
        >
          Ягненок
        </Link>
        <Link
          className=" hover:text-green-20 py-8 hover:border-green-20 hover:border-b-2 border-gray-10"
          to="pork"
        >
          Свинина
        </Link>
        <Link
          className=" hover:text-green-20 py-8 hover:border-green-20 hover:border-b-2 border-gray-10"
          to="other"
        >
          Другое
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Categories;
