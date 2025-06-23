import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { Product } from "../types/product";

type SubmitButtonProps = {
  items: Product[];
  onSuccess: () => void;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ items, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (items.length === 0) return;
    setLoading(true);
    try {
      await axiosInstance.post("/cart", { items });
      onSuccess();
    } catch (error) {
      alert("Error submitting the cart");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="btn btn-success w-100"
      onClick={handleSubmit}
      disabled={loading || items.length === 0}
    >
      {loading ? "Submitting..." : "Submit Order"}
    </button>
  );
};

export default SubmitButton;
