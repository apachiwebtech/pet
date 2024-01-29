import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colors : [],
    breeds : [],
    menuItems : [],
}

const DropDownSlice = createSlice({
    name : "dropDownSlice",
    initialState : initialState,
    reducers : {
        getBreeds : (state, action)=>{
            state.breeds = action.payload.breeds;
            console.log(state.breeds, "form slice")

        },
        getColors : (state, action)=>{
            state.colors = action.payload.colors;
        }, 
    }
})

export const DropDownActions = DropDownSlice.actions;
export default DropDownSlice.reducer;