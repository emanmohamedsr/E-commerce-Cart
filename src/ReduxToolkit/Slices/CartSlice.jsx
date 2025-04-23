import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	initialState: [],
	name: "cartSlice",
	reducers: {
		addToCart: (state, action) => {
			const existingItem = state.find((item) => item.id === action.payload.id);
			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.push({ ...action.payload, quantity: 1 });
			}
		},
		deleteFromCart: (state, action) => {
			return state.filter((item) => item.id !== action.payload.id);
		},
	},
	// extraReducers: (builder) => { }
});

export default cartSlice.reducer;
export const { addToCart, deleteFromCart } = cartSlice.actions;
