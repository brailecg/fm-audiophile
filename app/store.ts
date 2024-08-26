import { create } from "zustand";
import { CartProductType } from "@/types/appTypes";

export type CartDataState = {
  cartDataArray: CartProductType[];
};

export type LinkDataAction = {
  updateCartDataArray: (cartDataArray: CartDataState["cartDataArray"]) => void;
};

export const useCartDataStore = create<CartDataState & LinkDataAction>(
  (set) => ({
    cartDataArray: [],
    updateCartDataArray: (cartDataArray) =>
      set(() => ({ cartDataArray: cartDataArray })),
  })
);

/**
 * What the cart store needs
 * 1. number of items or total_item_count
 * 2. items list
 * 3. total_amount of current user
 */

// export const useLinkDataStore = create<LinkDataState & LinkDataAction>(
//     (set) => ({
//       linkDataArray: [],
//       updateLinkDataArray: (linkDataArray) =>
//         set(() => ({ linkDataArray: linkDataArray })),
//     })
//   );
