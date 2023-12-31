import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"
import crudReducer from "./crudSlice"

export const store = configureStore({
    reducer: {
        //burada reducerları tanımlayacağız
        counterReducer,
        crudReducer
    },
});

//1- configure store parametre olarak bir obje
//2- ve içerisinde reducer objesini tanımla

