import React from "react";
import { Link } from "react-router-dom";
const AuthNav = () => {
  return (
    <div className="flex flex-col">
      <Link to="/login" className="w-32">
        login
      </Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default AuthNav;
