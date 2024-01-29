import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gender : ''
}

const petFormSlice = createSlice({
    name : "petFormSLice",
    initialState : initialState,

    reducers : {
        putGender : (state, action)=>{
            const newGender = action.payload.gender;
            
            state.gender = newGender;
            console.log(newGender, "from slice");
        }
    }
})
export const PetFormActions = petFormSlice.actions;
export default petFormSlice.reducer;