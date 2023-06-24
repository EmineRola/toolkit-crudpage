
import { createSlice } from "@reduxjs/toolkit";
//hem reducerları 
// hem actionları 
// hem actionTypeları farklı
//dosyalarda oluşturmak yerine bir dosyada oluşturuyoruz

//slice kurulumu
//createSlice methodunu import et
//içerişsinde bir obje tanımla
//name:slice ismi
// initialState:başlangıç state
//reducers: aksiyonları ve sore yapıcakları etkiyi tanımlayacağız


//1.aşama oluşturma aşaması
const initialState = {
    counter: 0,
}

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
        //todo burada birden fazla reducr fonksiyonu oluşturabiliriz
        //bu fonksiyonları create slice bizim için actiion ve reducer olarak ikiye ayırıyor
        increase: (state, action) => {
            state.counter += 1;
        },
        decrease: (state, action) => {
            state.counter -= 1;
        },
        // payload değerine sahip
        setCount: (state, action) => {
            state.counter = action.payload;
        },
    }
});

//2.aşama export aşaması tanımladığımız counterSlice objesi içerisindeki actionları
//export etme

export const { increase, decrease, setCount } = counterSlice.actions;
//3.aşama: counterSlice objesi içerisinde reducer ıexport et

export default counterSlice.reducer;