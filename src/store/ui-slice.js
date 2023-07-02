import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name: "ui",
    initialState: { isValueTouched: false , valueIsValid: false, notification: null },
    reducers: {
        toggle(state){
            state.isValueTouched = true;
        },
        reset(state){
            state.isValueTouched = false;
            state.valueIsValid = false;
        },
        valueIsValid (state,action) {
           if(action.trim()!==""){
            state.valueIsValid = true;
           }else{
            state.valueIsValid = false;
           }
        },
        showNotification(state,action){
            state.notification = { status: action.payload.status, title: action.payload.title, message: action.payload.message}
        },
        hideNotification(state){
            state.notification = null;
        }

    }

})

export const uiActions = uiSlice.actions;
export default uiSlice;