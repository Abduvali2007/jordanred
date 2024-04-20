import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
};

export const AddProductSlice = createSlice({
  name: "add_Product",
  initialState,
  reducers: {
    addProduct(state, action) {
      localStorage.setItem(
        "product",
        JSON.stringify([...state.product, action.payload])
      );
      state.product = [...state.product, action.payload];
    },
    del(state, action) {
let res =state.product.filter((el)=> el.id !== action.payload.id)
localStorage.setItem(
  "product",
  JSON.stringify(res))
      state.product = res
    },

  },
});
export const {addProduct ,del} = AddProductSlice.actions;
export default AddProductSlice.reducer;
