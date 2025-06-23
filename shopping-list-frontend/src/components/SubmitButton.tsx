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
    <div className="mb-4">
      <button
        className="btn btn-success w-100 fw-bold rounded-pill shadow-sm d-flex justify-content-center align-items-center gap-2"
        onClick={handleSubmit}
        disabled={loading || items.length === 0}
        style={{ minHeight: 48, fontSize: "1.1rem" }}
      >
        <i className="bi bi-send"></i>
        {loading ? "Submitting..." : "Submit Order"}
      </button>
    </div>
  );
};

export default SubmitButton;
