import {configureStore} from '@reduxjs/toolkit'
import AddProductSlice from './AddProductSlice'
import AddToBasket from './AddToBasket'
export const store = configureStore({
    reducer:{
        AddProduct: AddProductSlice,
        main: AddToBasket
    }
})