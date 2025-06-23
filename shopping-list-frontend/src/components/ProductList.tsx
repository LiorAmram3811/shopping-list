import React from "react";
import { Product } from "../types/product";
import { Category } from "../types/category";
import ProductItem from "./ProductItem";

type ProductListProps = {
  items: Product[];
  categories: Category[];
};

const ProductList: React.FC<ProductListProps> = ({ items, categories }) => {
  const categoryIdToName = categories.reduce<Record<number, string>>(
    (map, cat) => {
      map[cat.id] = cat.name;
      return map;
    },
    {}
  );

  return (
    <ul className="list-group mb-3">
      {items.length === 0 ? (
        <li className="list-group-item text-center">No products added</li>
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
  );
};

export default ProductList;
