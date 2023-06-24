
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tasks: [],
};
const todoSlice = createSlice({
    name: "crudSlice",
    initialState,
    reducers: {
        addTask: (state, action) => {
            //önce store göndermemiş içinde bazı düzenlemeler yapmış olmamız gerek
            console.log(state.tasks.length);
            //storeda tutulan max verilerin sayısını alma
            const maxId = state.tasks.length + 1;
            //bulduğumuz ıd değerini objeye ekleme
            //sen burda actionun payloadını  göndermedek istiyorsun ama ben bunun yanına yeni bir değer ekleyeceğim

            action.payload.id = maxId;
            state.tasks = [...state.tasks, action.payload];

        },

        removeTask: (state, action) => {
            // silinecek elemnın sırasını bulma
            const index = state.tasks.filter((item) => item.id == action.payload)

            state.tasks.splice(index, 1)



        },
    },
});

export const { addTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;