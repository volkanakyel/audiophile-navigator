import { defineStore } from "pinia";
import { ProductDetails, ProductItem } from "~/interfaces/audioProduct";
export const useFiltersStore = defineStore({
  id: "cart",
  state: () => {
    return {
      cartItems: [] as ProductItem[],
      productItems: [] as ProductDetails[],
      cartPanelOpen: false,
    };
  },
  getters: {
    getCartState: (state) => state.cartPanelOpen,
    getCartItems: (state) => state.cartItems,
    getTotalPrice: (state) =>
      state.cartItems.reduce((sum, product) => sum + product.price, 0),
  },
  actions: {
    addItemToCart(value: ProductItem) {
      this.cartItems.push(value);
    },
    openCartPanel() {
      this.cartPanelOpen = true;
    },
    closeCartPanel() {
      this.cartPanelOpen = false;
    },
    clearCartContent() {
      this.cartItems.length = 0;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFiltersStore, import.meta.hot));
}
