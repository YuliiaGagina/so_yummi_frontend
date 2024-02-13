import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./../redux/user/userOperations";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: formData.email,
      password: formData.password,
    };
    dispatch(login(user));
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="email"
            />
          </label>
          <label htmlFor="">
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
              placeholder="password"
              value={formData.password}
            />
          </label>

          <button type="submit">Log in </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
