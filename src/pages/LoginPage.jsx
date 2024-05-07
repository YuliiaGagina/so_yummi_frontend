import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./../redux/user/userOperations";
import loginlogin from "../assets/loginlogin.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const errorMesage = useSelector((state) => state.user.error);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Будь ласка, заповніть усі поля");
      return;
    }
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
      <div className="absolute z-[-1] flex items-end justify-around bottom-0 bg-loginbg h-96 w-full bg-no-repeat cover bg-center bg-cover"></div>

      <div className="pt-32 flex items-center justify-around ">
        <div>
          <img src={loginlogin} className="w-96" alt="loginimg" />
        </div>
        <div>
          <div>
            <div className="w-96 bg-gray-100 py-16 rounded-lg ">
              <p className="px-12 mb-4 text-white "> Sign In</p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center gap-10 "
              >
                <label>
                  <input
                    className="block w-full bg-gray-100 bg-opacity-50 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset  placeholder:text-gray focus:ring-2 ring-gray-10 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6 "
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email"
                  />
                </label>
                <label>
                  <input
                    className="block w-full bg-gray-100 bg-opacity-50 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset  placeholder:text-gray ring-gray-10 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6 "
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    placeholder="password"
                    value={formData.password}
                  />
                </label>
                {error && <p className="text-green">{error}</p>}
                {errorMesage && (
                  <p className="text-red-100 text-xs px-3">{errorMesage}</p>
                )}
                <button
                  className="rounded-md text-white  bg-green-20 py-2 px-6 w-72 mb-4"
                  type="submit"
                >
                  Log in{" "}
                </button>
              </form>
              <Link
                className=" block text-center text-gray-10 underline underline-offset-1 "
                to="/register"
              >
                Registration
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
