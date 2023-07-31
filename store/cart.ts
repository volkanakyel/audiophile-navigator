import { defineStore } from "pinia";
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
      productItems: [] as ProductDetails[],
      cartPanelOpen: false,
    };
  },
  getters: {
    getCartState: (state) => state.cartPanelOpen,
    getCartItemsLength: (state) => state.productItems.length,
  },
  actions: {
    addItemToCart(value: ProductItem) {
      this.cartItems.items.push(value);
    },
    openCartPanel() {
      this.cartPanelOpen = true;
    },
    closeCartPanel() {
      this.cartPanelOpen = false;
    },
  },
});
