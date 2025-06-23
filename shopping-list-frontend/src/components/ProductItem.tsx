import React from "react";
import { Product } from "../types/product";
import { Category } from "../types/category";
import { capitalize } from "../utils/capitalize";
import useCartStore from "../store/cartStore";

type ProductItemProps = {
  product: Product;
  categoryName: string;
};

const ProductItem: React.FC<ProductItemProps> = ({ product, categoryName }) => {
  const updateProductQuantity = useCartStore(
    (state) => state.updateProductQuantity
  );
  const removeProduct = useCartStore((state) => state.removeProduct);

  const handleIncrease = () => {
    updateProductQuantity(product, product.quantity + 1);
  };

  const handleDecrease = () => {
    if (product.quantity > 1) {
      updateProductQuantity(product, product.quantity - 1);
    } else {
      removeProduct(product);
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        {capitalize(product.name)} ({categoryName})
      </span>
      <div>
        <button
          className="btn btn-sm btn-outline-secondary me-2"
          onClick={handleDecrease}
        >
          -
        </button>
        <span className="badge bg-primary rounded-pill">
          {product.quantity}
        </span>
        <button
          className="btn btn-sm btn-outline-secondary ms-2"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
