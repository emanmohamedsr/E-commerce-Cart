import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async () => {
		const response = await fetch("https://fakestoreapi.com/products");
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		const data = await response.json();
		return data;
	},
);

const productsSlice = createSlice({
	name: "productsSlice",
	initialState: {
		products: [],
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default productsSlice.reducer;
// export const { } = productsSlice.actions;
