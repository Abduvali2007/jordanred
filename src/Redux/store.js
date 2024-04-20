import {configureStore} from '@reduxjs/toolkit'
import AddProductSlice from './AddProductSlice'
import { AddToBasketSlice, addBasket, basketSlice } from './AddToBasket'
export const store = configureStore({
    reducer:{
        AddProduct: AddProductSlice,
        AddBasket: basketSlice
    }
})