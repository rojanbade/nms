import React, { useEffect, useState } from "react";
import axios from "axios";
import "./form.css";

const AddProduct = () => {
  const [form, setForm] = useState({
    title: "",
    price: 0,
    description: "",
    images: "",
    categoryId: 1,
  });
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: form.title,
      price: parseInt(form.price),
      description: form.description,
      categoryId: parseInt(form.categoryId),
      images: ["https://placeimg.com/640/480/any"],
    };

    try {
      console.log(data);
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/products",

        data
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    async function fetchCategory() {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/categories?limit=10"
        );
        setCategories(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchCategory();
  }, []);

  console.log({ categories });
  return (
    <div className="container-product">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <br />
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <br />
        <label>Price</label>
        <br />

        <input
          type="number"
          placeholder="Price"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
        <br />
        <label>Description</label>
        <br />

        <input
          type="text"
          placeholder="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
        <br />
        <label>Image</label>
        <br />
        <input type="file" placeholder="Image" />
        <br />
        <label>Category</label>
        <br />

        <select
          name="categoryId"
          value={form.categoryId}
          onChange={handleChange}
        >
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
