import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  Man: JSON.parse(localStorage.getItem("man")) || [],
  Woman: JSON.parse(localStorage.getItem("woman")) || [],
  Kid: JSON.parse(localStorage.getItem("kid")) || [],
  Sale: JSON.parse(localStorage.getItem("sale")) || [],
  Search: JSON.parse(localStorage.getItem("search")) || [],
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
    // del(state, action) {
    //   let res = state.product.filter((el) => el.id !== action.payload.id);
    //   localStorage.setItem("product", JSON.stringify(res));
    //   state.product = res;
    // },
    categoryMan(state, action) {
      let res = state.product.filter((el) => el.category === "man");
      localStorage.setItem("man", JSON.stringify(res));
      state.Man = res;
    },
    categoryWoman(state, action) {
      let res = state.product.filter((el) => el.category === "woman");
      localStorage.setItem("woman", JSON.stringify(res));
      state.Woman = res;
    },
    categoryKid(state, action) {
      let res = state.product.filter((el) => el.category === "kids");
      localStorage.setItem("kid", JSON.stringify(res));
      state.Kid = res;
    },
    categorySale(state, action) {
      let res = state.product.filter((el) => el.category === "sale");
      localStorage.setItem("sale", JSON.stringify(res));
      state.Sale = res;
    },
//     SearchProduct(state,action){
// state.Search = [...state.product]
//     }
  },
});
export const { addProduct, del, categoryMan, categoryWoman, categoryKid,categorySale,SearchProduct } =
  AddProductSlice.actions;
export default AddProductSlice.reducer;
