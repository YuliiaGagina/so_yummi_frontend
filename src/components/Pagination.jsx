import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav className="flex align-center justify-center py-8 ">
      <ul className="pagination flex py-2 px-4 rounded-lg bg-slate-100 ">
        <li className="page-item w-10 h-8   border-green-90 flex items-center justify-center">
          <NavLink className="page-link" onClick={goToPrevPage} href="#">
            {"<<"}
          </NavLink>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${
              currentPage === pgNumber ? "active" : ""
            }w-10 h-8  px-2   flex items-center justify-center`}
          >
            <NavLink
              onClick={() => setCurrentPage(pgNumber)}
              className={`page-link ${
                currentPage === pgNumber
                  ? "text-white block rounded-full bg-gray-100 px-2 "
                  : "text-black"
              }`}
              href="#"
            >
              {pgNumber}
            </NavLink>
          </li>
        ))}
        <li className="page-item">
          <NavLink
            className="w-10 h-8  flex items-center justify-center"
            onClick={goToNextPage}
            href="#"
          >
            {">>"}
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
};

export default Pagination;
