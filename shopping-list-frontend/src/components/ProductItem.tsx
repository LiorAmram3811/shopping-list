import React from "react";
import { Product } from "../types/product";
import useCartStore from "../store/cartStore";
import { capitalize } from "../utils/capitalize";
import { categoryBackgroundColor } from "../utils/categoryBackgroundColor";
import { toast } from "react-toastify";

type ProductItemProps = {
  product: Product;
  categoryName: string;
};

const ProductItem: React.FC<ProductItemProps> = ({ product, categoryName }) => {
  const updateProductQuantity = useCartStore(
    (state) => state.updateProductQuantity
  );
  const removeProduct = useCartStore((state) => state.removeProduct);

  const handleIncrease = () =>
    updateProductQuantity(product, product.quantity + 1);
  const handleDecrease = () => {
    if (product.quantity > 1) {
      updateProductQuantity(product, product.quantity - 1);
    } else {
      removeProduct(product);
    }
  };
  const handleRemove = () => {
    removeProduct(product);
    toast.info("Product removed from cart");
  };

  return (
    <li className="list-group-item border-0 mb-2 p-0 bg-transparent">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center shadow-sm rounded bg-white px-3 py-2">
        <div className="d-flex align-items-center gap-2 mb-2 mb-md-0">
          <span className="fw-bold">{capitalize(product.name)}</span>
          <span
            className={`badge rounded-pill px-3 ${categoryBackgroundColor(
              categoryName
            )}`}
          >
            {categoryName}
          </span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button
            className="btn btn-light border"
            style={{ minWidth: 32 }}
            onClick={handleDecrease}
            title="Decrease"
          >
            <span className="fw-bold">-</span>
          </button>
          <span className="mx-1 fw-bold">{product.quantity}</span>
          <button
            className="btn btn-light border"
            style={{ minWidth: 32 }}
            onClick={handleIncrease}
            title="Increase"
          >
            <span className="fw-bold">+</span>
          </button>
          <button
            className="btn btn-light border delete-btn"
            style={{ minWidth: 32, transition: "background 0.2s" }}
            onClick={handleRemove}
            title="Delete"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
