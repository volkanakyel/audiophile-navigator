import { defineStore } from "pinia";
import productList from "data/data";
import {
  ProductDetails,
  cartItem,
  ProductItem,
} from "~/interfaces/audioProduct";
export const useFiltersStore = defineStore({
  id: "cart",
  state: () => {
    return {
      cartItems: {} as cartItem,
      productItems: productList as ProductDetails[],
    };
  },
  actions: {
    addItemToCart(value: ProductItem) {
      this.cartItems.items.push(value);
    },
  },
});
