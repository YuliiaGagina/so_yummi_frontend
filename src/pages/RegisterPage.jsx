import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "./../redux/user/userOperations";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
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
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    dispatch(register(user));

    setFormData({
      name: "",
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
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="name"
            />
          </label>
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
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
