import { create } from "zustand";
import { Product } from "../types/product";

type CartStore = {
  cartItems: Product[];
  addProduct: (item: Product) => void;
  resetCart: () => void;
  updateProductQuantity: (targetProduct: Product, newQuantity: number) => void;
  removeProduct: (targetProduct: Product) => void;
};

const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addProduct: (newItem) =>
    set((state) => {
      // Normalize the name to lower case for comparison
      const normalizedNewName = newItem.name.trim().toLowerCase();
      // Check if the product already exists in the cart (by name & categoryId)
      const existingItem = state.cartItems.find(
        (item) =>
          item.name.trim().toLowerCase() === normalizedNewName &&
          item.categoryId === newItem.categoryId
      );
      // If exists, update the quantity of that product
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.name.trim().toLowerCase() === normalizedNewName &&
            item.categoryId === newItem.categoryId
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          ),
        };
      }
      // If not, add as a new product to the cart
      else {
        return {
          cartItems: [
            ...state.cartItems,
            { ...newItem, name: newItem.name.trim() },
          ],
        };
      }
    }),
  resetCart: () => set({ cartItems: [] }),
  updateProductQuantity: (targetProduct, newQuantity) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.name.trim().toLowerCase() ===
          targetProduct.name.trim().toLowerCase() &&
        item.categoryId === targetProduct.categoryId
          ? { ...item, quantity: newQuantity }
          : item
      ),
    })),
  removeProduct: (targetProduct) =>
    set((state) => ({
      cartItems: state.cartItems.filter(
        (item) =>
          !(
            item.name.trim().toLowerCase() ===
              targetProduct.name.trim().toLowerCase() &&
            item.categoryId === targetProduct.categoryId
          )
      ),
    })),
}));

export default useCartStore;
