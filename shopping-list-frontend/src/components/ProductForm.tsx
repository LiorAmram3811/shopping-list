import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { yupValidation } from "../utils/yupValidation";
import { Category } from "../types/category";
import useCartStore from "../store/cartStore";
import { toast } from "react-toastify";

type ProductFormProps = {
  onCategoriesLoaded: (categories: Category[]) => void;
};

type ProductFormData = {
  name: string;
  categoryId: number;
};

const ProductForm: React.FC<ProductFormProps> = ({ onCategoriesLoaded }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const addProduct = useCartStore((state) => state.addProduct);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<ProductFormData>({
    resolver: yupResolver(yupValidation),
    defaultValues: { name: "", categoryId: 0 },
  });

  useEffect(() => {
    axiosInstance.get<Category[]>("/categories").then((res) => {
      setCategories(res.data);
      onCategoriesLoaded(res.data);
    });
  }, [onCategoriesLoaded]);

  const onSubmit = (data: ProductFormData) => {
    addProduct({
      name: data.name.trim(),
      categoryId: data.categoryId,
      quantity: 1,
    });
    reset();
    toast.success("Product added to cart!");
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm mb-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row g-2">
          <div className="col-12 col-md-5">
            <label className="form-label" htmlFor="productName">
              Product Name
            </label>
            <input
              id="productName"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              type="text"
              placeholder="Enter product name"
              {...register("name")}
              autoComplete="off"
              maxLength={35}
            />
            {errors.name && (
              <div className="invalid-feedback d-block">
                {errors.name.message}
              </div>
            )}
          </div>

          <div className="col-12 col-md-5">
            <label className="form-label" htmlFor="categorySelect">
              Category
            </label>
            <select
              id="categorySelect"
              className={`form-select ${errors.categoryId ? "is-invalid" : ""}`}
              {...register("categoryId")}
              onChange={(e) => setValue("categoryId", Number(e.target.value))}
            >
              <option value={0}>Select category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            {errors.categoryId && (
              <div className="invalid-feedback d-block">
                {errors.categoryId.message}
              </div>
            )}
          </div>

          <div className="col-12 col-md-2 d-flex align-items-end">
            <button
              type="submit"
              className="btn btn-primary fw-bold rounded shadow-sm w-100"
              style={{
                marginBottom: errors.name || errors.categoryId ? "1.5rem" : "0",
              }}
            >
              <i className="bi bi-plus-lg me-1"></i>
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
