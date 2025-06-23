import React from "react";
import { Product } from "../types/product";

type TotalItemsProps = {
  items: Product[];
};

const TotalItems: React.FC<TotalItemsProps> = ({ items }) => {
  const total = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="alert alert-info text-center">
      Total: {total} items in cart
    </div>
  );
};

export default TotalItems;
