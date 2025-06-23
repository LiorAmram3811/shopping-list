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
    <div className="d-flex gap-2 my-3">
      <input
        className="form-control"
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select
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
      <button className="btn btn-primary" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default ProductForm;
