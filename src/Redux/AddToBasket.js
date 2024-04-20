import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
};

export const basketSlice = createSlice({
  name: "BASKETSLICE",
  initialState,
  reducers: {
    addBasket(state, action) {
      let findPro = state.basket.find((el) => el.id === action.payload.id);
      if (findPro) {
      alert("not found")
    }else{
      localStorage.setItem(
        "basket",
        JSON.stringify([...state.basket, action.payload])
      );
      state.basket = [...state.basket, action.payload];
    }
    },
    delbtn(state, action) {
      let res = state.basket.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("basket", JSON.stringify(res));
      state.basket = res;
    },
    plus(state,action){
      state.basket.map((el)=> el.id === action.payload.id ? {...el.quantity,quantity: el.quantity +1}:1)
    }
  },
});

export const { addBasket, delbtn ,plus} = basketSlice.actions;
export default basketSlice.reducer;
