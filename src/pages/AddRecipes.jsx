import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../redux/user/userOperations";

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData({ ...formData, photo: imageFile });
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

    // setFormData({
    //   title: "",
    //   about: "",
    //   category: "",
    //   cooking_time: "",
    //   ingredients: [],
    //   recipe_preparation: "",
    //   favorite: false,
    //   image: null,
    // });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleInputChange}
      />
      <textarea
        name="about"
        placeholder="About"
        value={formData.about}
        onChange={handleInputChange}
      ></textarea>
      <select
        name="category"
        value={formData.category}
        onChange={handleInputChange}
      >
        <option value="">Оберіть категорію</option>
        <option value="Завтрак">Завтрак</option>
        <option value="Салат">Салат</option>
        <option value="Говядина">Говядина</option>
        <option value="Курица">Курица</option>
        <option value="Паста">Паста</option>
        <option value="Десерты">Десерты</option>
        <option value="Ягненок">Ягненок</option>
        <option value="Свинина">Свинина</option>
        <option value="Другое">Другое</option>
      </select>
      <input type="file" name="photo" onChange={handleImageChange} />
      <div>
        Cooking Time:
        <input
          type="text"
          name="cooking_time"
          value={formData.cooking_time}
          onChange={handleInputChange}
        />
      </div>
      <div>
        Ingredients:
        {formData.ingredients.map((ingredient, idx) => (
          <div key={idx}>
            <input
              type="text"
              placeholder="Ingredient"
              value={ingredient}
              onChange={(e) => handleIngredientChange(idx, e)}
            />
            <button type="button" onClick={() => removeIngredient(idx)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addIngredient}>
          Add Ingredient
        </button>
      </div>
      <textarea
        name="recipe_preparation"
        placeholder="Recipe Preparation"
        value={formData.recipe_preparation}
        onChange={handleInputChange}
      ></textarea>
      <label>
        <input
          type="checkbox"
          name="favorite"
          checked={formData.favorite}
          onChange={handleInputChange}
        />
        Favorite
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddRecipes;
