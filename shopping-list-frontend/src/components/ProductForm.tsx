import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import { Category } from "../types/category";
import useCartStore from "../store/cartStore";

type ProductFormProps = {
  onCategoriesLoaded: (categories: Category[]) => void;
};

const ProductForm: React.FC<ProductFormProps> = ({ onCategoriesLoaded }) => {
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const addProduct = useCartStore((state) => state.addProduct);

  useEffect(() => {
    axiosInstance.get<Category[]>("/categories").then((res) => {
      setCategories(res.data);
      onCategoriesLoaded(res.data);
    });
  }, [onCategoriesLoaded]);

  const handleAdd = () => {
    if (!name.trim() || !categoryId) return;
    addProduct({
      name: name.trim(),
      categoryId: parseInt(categoryId),
      quantity: 1,
    });
    setName("");
    setCategoryId("");
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm mb-4">
      <div className="row g-2 align-items-end">
        <div className="col-12 col-md-5">
          <label className="form-label" htmlFor="productName">
            Product Name
          </label>
          <input
            id="productName"
            className="form-control"
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="col-12 col-md-5">
          <label className="form-label" htmlFor="categorySelect">
            Category
          </label>
          <select
            id="categorySelect"
            className="form-select"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 col-md-2 d-grid">
          <button
            className="btn btn-primary fw-bold rounded shadow-sm"
            onClick={handleAdd}
            disabled={!name.trim() || !categoryId}
          >
            <i className="bi bi-plus-lg me-1"></i>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
