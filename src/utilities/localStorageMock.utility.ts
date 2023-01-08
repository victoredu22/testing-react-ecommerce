import { Product } from "@/interface/product";

export const localStorageMock = (function () {
  let store = new Map();
  return {
    getItem(key: string): string {
      return store.get(key);
    },

    setItem: function (key: string, value: Product[]) {
      store.set(key, value);
    },

    clear: function () {
      store = new Map();
    },

    removeItem: function (key: string) {
      store.delete(key);
    },
  };
})();
Object.defineProperty(window, "localStorage", { value: localStorageMock });
