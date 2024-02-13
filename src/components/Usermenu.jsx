import React from "react";
import authSelectors from "../redux/user/user-selectors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./../redux/user/userOperations";

const Usermenu = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state?.user?.user?.name);

  return (
    <div>
      <p>{name || ""}</p>
      <button>changeTheme</button>
      <button
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default Usermenu;
