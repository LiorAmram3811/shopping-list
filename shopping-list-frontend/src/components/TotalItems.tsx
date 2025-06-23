import React from "react";
import { Product } from "../types/product";

type TotalItemsProps = {
  items: Product[];
};

const TotalItems: React.FC<TotalItemsProps> = ({ items }) => {
  const total = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="alert alert-info d-flex align-items-center justify-content-center gap-2 rounded-pill shadow-sm mb-4">
      <i className="bi bi-box-seam"></i>
      <span className="fw-bold">
        Total: {total} {total === 1 ? "item" : "items"} in cart
      </span>
    </div>
  );
};

export default TotalItems;
