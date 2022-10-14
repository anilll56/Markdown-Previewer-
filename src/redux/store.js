import { configureStore } from "@reduxjs/toolkit";
import textAreaSlice from "./textAreaSlice";



export const store=configureStore({
    reducer:{
        texts:textAreaSlice,
    }
});