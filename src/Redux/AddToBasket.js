import { createSlice } from "@reduxjs/toolkit"

 const initialState = {
  basket:JSON.parse((localStorage.getItem("basket")))|| []
 }

 export const basketSlice = createSlice ({
  name: "BASKETSLICE",
  initialState,
  reducers:{
    addBasket(state, action){
      localStorage.setItem("basket", JSON.stringify([...state.basket,action.payload]))
      state.basket = [...state.basket,action.payload]
    }
  }
 })

 export const {addBasket} = basketSlice.actions;
 export default basketSlice.reducer
