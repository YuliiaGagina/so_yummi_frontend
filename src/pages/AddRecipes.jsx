import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../redux/user/userOperations";
import placeholder from "../assets/placehilder.jpg";
import { MdAdd } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";
import Button from "./../components/Button";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import leftLeaves from "../assets/left_leaves.png";
import addleaves from "../assets/addleaves.png";
import rectangle from "../assets/rectangle.png";

const AddRecipes = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    about: "",
    category: "",
    cooking_time: "",
    ingredients: [],
    recipe_preparation: "",
    favorite: false,
    image: null,
  });
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({ ...formData, photo: imageFile });
    setPreviewImage(URL.createObjectURL(imageFile));
  };

  const handleIngredientChange = (index, e) => {
    const { value } = e.target;
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients[index] = value;

    setFormData({ ...formData, ingredients: updatedIngredients });
    console.log(formData);
  };
  const addIngredient = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, ""],
    });
  };

  const removeIngredient = (index) => {
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients.splice(index, 1);
    setFormData({ ...formData, ingredients: updatedIngredients });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormData = new FormData();
    newFormData.append("title", formData.title);
    newFormData.append("about", formData.about);
    newFormData.append("category", formData.category);
    newFormData.append("cooking_time", formData.cooking_time);
    newFormData.append("ingredients", formData.ingredients.join(", "));
    newFormData.append("recipe_preparation", formData.recipe_preparation);
    newFormData.append("favorite", formData.favorite);
    newFormData.append("photo", formData.photo, formData.photo.name);

    dispatch(addRecipe(newFormData));

    setFormData({
      title: "",
      about: "",
      category: "",
      cooking_time: "",
      ingredients: [],
      recipe_preparation: "",
      favorite: false,
      image: null,
    });
  };

  return (
    <main className="relative">
      <div>
        <img
          src={rectangle}
          className="absolute z-[-1]   right-16 top-12  w-8 "
          alt="leftLeaves"
          width="420px"
        />
        <img
          src={rectangle}
          className="absolute z-[-1]   right-1/3 top-28  w-8 "
          alt="leftLeaves"
          width="420px"
        />
        <img
          src={rectangle}
          className="absolute z-[-1]   left-4 top-4  w-8 "
          alt="leftLeaves"
          width="420px"
        />
      </div>
      <div className="container:lg md:px-28 xs:px-4 py-8">
        <h1 className="text-2xl font-semibold py-9">Add recipe</h1>
        <div className="flex justify-between">
          <div>
            {" "}
            <form onSubmit={handleSubmit}>
              <div className="flex gap-8 mb-16">
                <div className="relative">
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    ref={fileInputRef}
                  />
                  <img
                    src={previewImage || placeholder}
                    alt="Preview"
                    onClick={() => fileInputRef.current.click()} // Викликаємо клік на input при кліку на фото-заглушку
                    className="cursor-pointer max-w-full max-h-full" // Стилізуємо зображення
                  />
                </div>
                <div className="flex flex-col gap-9">
                  <input
                    className="h-16 border-0 border-b border-green focus:border-green-90 focus:outline-none"
                    type="text"
                    name="title"
                    placeholder="Enter item title"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                  <textarea
                    className="h-16 border-0 border-b  border-green focus:border-green-90 focus:outline-none"
                    name="about"
                    placeholder="Enter about recipe"
                    value={formData.about}
                    onChange={handleInputChange}
                  ></textarea>
                  <div className="relative  inline-block pl-40">
                    <select
                      className="max-h-8 overflow-y-auto border-b  border-green focus:border-green-90 focus:outline-none   bg-white    rounded leading-tight    w-32 "
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      placeholder="Category"
                    >
                      <option className=" hover:bg-gray-100" value="Завтрак">
                        Завтрак
                      </option>
                      <option value="Салат">Салат</option>
                      <option value="Говядина">Говядина</option>
                      <option value="Курица">Курица</option>
                      <option value="Паста">Паста</option>
                      <option value="Десерты">Десерты</option>
                      <option value="Ягненок">Ягненок</option>
                      <option value="Свинина">Свинина</option>
                      <option value="Другое">Другое</option>
                    </select>
                    <div className="absolute inset-y-0 left-0 flex items-center  pointer-events-none">
                      <span className="text-gray-10">Оберіть категорію</span>
                    </div>
                  </div>

                  <input
                    className="h-16 border-0 border-b border-green focus:border-green-90 focus:outline-none"
                    type="text"
                    name="cooking_time"
                    value={formData.cooking_time}
                    onChange={handleInputChange}
                    placeholder="Cooking time"
                  />
                </div>
              </div>

              <div>
                <p className="text-xl text-gray-20 font-semibold mb-8">
                  Ingredients (name and count)
                </p>
                <button
                  className="mb-8 flex text-l gap-3 items-center"
                  type="button"
                  onClick={addIngredient}
                >
                  Add Ingredient
                  <MdAdd />
                </button>
                {formData.ingredients.map((ingredient, idx) => (
                  <div className="mb-4" key={idx}>
                    <input
                      className="h-16 border-0 border-b border-green focus:border-green-90 focus:outline-none"
                      type="text"
                      placeholder="Ingredient"
                      value={ingredient}
                      onChange={(e) => handleIngredientChange(idx, e)}
                    />
                    <button type="button" onClick={() => removeIngredient(idx)}>
                      <MdOutlineDeleteForever />
                    </button>
                  </div>
                ))}
              </div>
              <p className="text-xl text-gray-20 font-semibold mb-4">
                Recipe Preparation
              </p>
              <textarea
                className="w-72 bg-green rounded-md px-4 py-4 h-56"
                name="recipe_preparation"
                placeholder="Enter recipe"
                value={formData.recipe_preparation}
                onChange={handleInputChange}
              ></textarea>
              <div className="flex justify-start">
                {" "}
                <label className="block">
                  <input
                    type="checkbox"
                    name="favorite"
                    checked={formData.favorite}
                    onChange={handleInputChange}
                  />
                  Favorite
                </label>
                <Button
                  borderColor="green-20 "
                  hoverBg="green-20"
                  text="center"
                  type="submit"
                >
                  Add recipe
                </Button>
              </div>
            </form>
          </div>
          <div className="mx-auto">
            <div>
              {" "}
              <h2 className="font-semibold text-2xl text-gray-20 mb-8">
                Follow us
              </h2>
              <div className="text-green-20 text-3xl flex gap-4 mb-8">
                <FaFacebook />
                <IoLogoYoutube />
                <FaTwitter />
                <GrInstagram />
              </div>
            </div>

            <p className="font-semibold text-2xl text-gray-20 mb-8">
              Popular recipe
            </p>
          </div>
        </div>
      </div>
      <img
        src={addleaves}
        className="absolute z-[-1]   left-0 top-80  w-5/12 "
        alt="leftLeaves"
        width="420px"
      />
    </main>
  );
};

export default AddRecipes;
