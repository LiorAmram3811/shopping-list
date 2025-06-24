import React from "react";
import { Product } from "../types/product";
import { Category } from "../types/category";
import ProductItem from "./ProductItem";

type ProductListProps = {
  items: Product[];
  categories: Category[];
};

/**
 * ProductList component
 * - Displays all products currently in the cart.
 * - Renders a ProductItem for each product.
 */
const ProductList: React.FC<ProductListProps> = ({ items, categories }) => {
  const categoryIdToName = categories.reduce<Record<number, string>>(
    (map, cat) => {
      map[cat.id] = cat.name;
      return map;
    },
    {}
  );

  return (
    <div className="bg-white p-4 rounded shadow-sm mb-4">
      <ul className="list-group list-group-flush">
        {items.length === 0 ? (
          <li className="list-group-item text-center border-0">
            No products added yet
          </li>
        ) : (
          items.map((item, idx) => (
            <ProductItem
              key={idx}
              product={item}
              categoryName={categoryIdToName[item.categoryId]}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default ProductList;
