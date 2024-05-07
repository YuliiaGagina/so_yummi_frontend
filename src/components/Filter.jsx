import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { addFilter } from "../redux/filterSlice";
import { ThemeContext } from "./../components/ThemeProvider";

const Filter = () => {
  const dispatch = useDispatch();

  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex items-center justify-center ">
      <input
        className={`py-4 px-2 border border-4 rounded-lg border-green-20 mb-4 block ${
          theme === "light" ? "text-gray-100" : "text-gray-100"
        }`}
        placeholder="нипиши название блюда"
        type="text"
        name="filter"
        onChange={(event) => dispatch(addFilter(event.target.value))}
      />
    </div>
  );
};

export default Filter;
