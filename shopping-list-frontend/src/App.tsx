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
    <div className="container my-5" dir="rtl" style={{ maxWidth: 600 }}>
      <h2 className="mb-4 text-center">Shopping List</h2>
      <ProductForm onCategoriesLoaded={handleCategoriesLoaded} />
      <TotalItems items={cartItems} />
      <ProductList items={cartItems} categories={categories} />
      <SubmitButton items={cartItems} onSuccess={handleOrderSuccess} />
      {orderSent && (
        <div className="alert alert-success text-center mt-3">
          Order Sent Successfully!
        </div>
      )}
    </div>
  );
}

export default App;
