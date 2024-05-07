import React, { useContext } from "react";
import authSelectors from "../redux/user/user-selectors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./../redux/user/userOperations";
import { ThemeContext } from "./ThemeProvider";
import { RiSunLine } from "react-icons/ri";
import { RiMoonLine } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";

const Usermenu = () => {
  const dispatch = useDispatch();

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center gap-5">
      {/* <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button> */}
      <label className="switch">
        {/* <input type="checkbox" onClick={toggleTheme} /> */}
        <span onClick={toggleTheme} className={`slider ${theme}`}>
          {theme === "light" ? (
            <RiSunLine size="32px" />
          ) : (
            <RiMoonLine size="32px" />
          )}
        </span>
      </label>
      <button
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        <MdOutlineLogout size="32px" />
      </button>
    </div>
  );
};

export default Usermenu;
