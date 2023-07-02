import { createSlice } from "@reduxjs/toolkit";


const contactSlice = createSlice({
    name: "contact",
    initialState: { message: {}},
    reducers: {
        messageHandler (state, action){
            state.message = action.payload;
        }
    }
})



export default contactSlice;