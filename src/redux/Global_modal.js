// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isOpened: true
}


const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers:{
        openModal: (state, action) => {
            state.isOpened = true
        },
        closeModal: (state, action) => {
            state.isOpened = false
        },
    }

})

export const {openModal, closeModal} = modalSlice.actions
export default modalSlice.reducer

