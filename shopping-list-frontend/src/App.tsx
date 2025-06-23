import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import TotalItems from "./components/TotalItems";
import SubmitButton from "./components/SubmitButton";
import { Category } from "./types/category";
import useCartStore from "./store/cartStore";

function App() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [orderSent, setOrderSent] = useState(false);

  const cartItems = useCartStore((state) => state.cartItems);
  const resetCart = useCartStore((state) => state.resetCart);

  const handleCategoriesLoaded = (categoriesList: Category[]) => {
    setCategories(categoriesList);
  };

  const handleOrderSuccess = () => {
    setOrderSent(true);
    resetCart();
    setTimeout(() => setOrderSent(false), 2500);
  };

  return (
    <div className="min-vh-100 app-gradient">
      <div className="container py-5" style={{ maxWidth: 600, minWidth: 320 }}>
        <h2 className="mb-4 text-center">
          <i className="bi bi-cart3 me-2"></i>
          Shopping List
        </h2>
        <TotalItems items={cartItems} />
        <ProductForm onCategoriesLoaded={handleCategoriesLoaded} />
        <ProductList items={cartItems} categories={categories} />
        <SubmitButton items={cartItems} onSuccess={handleOrderSuccess} />
        {orderSent && (
          <div className="alert alert-success text-center mt-3 rounded-pill shadow-sm">
            <i className="bi bi-check2-circle me-2"></i>
            Order submitted successfully!
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
