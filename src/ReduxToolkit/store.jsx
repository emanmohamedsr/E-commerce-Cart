import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./Slices/ProductsSlice";
import cartReducer from "./Slices/CartSlice";

export const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
	},
});
