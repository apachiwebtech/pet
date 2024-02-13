import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gender : 'M',
    height : '',
    weight : '',
    breed : 'Beagle',
    color : 'Black',
    date: '',
}

const petFormSlice = createSlice({
    name : "petFormSLice",
    initialState : initialState,

    reducers : {
        putGender : (state, action)=>{
            const newGender = action.payload.gender;
            
            state.gender = newGender;
            console.log(newGender, "from slice");
        },
        addheight : (state, action)=>{
            const newHeight = action.payload.height;

            state.height = newHeight ;
            console.log(newHeight, "from slice height");
        },
        addweight : (state, action)=>{
            const newWeight = action.payload.weight;

            state.weight = newWeight ;
            console.log(newWeight, "from slice height");
        },
        addBreed : (state, action)=>{
            const newBreed = action.payload.breed;
            state.breed  = newBreed
        },
        addColor : (state, action)=>{
            const newColor = action.payload.color;
            state.color  = newColor
        },
        addDate : (state, action)=>{
            const newDate = action.payload.date;
            state.date  = newDate
        },
        getProfileData : (state, action)=>{
            const newObj = action.payload;
            state.gender = newObj.gender;
            state.height = Number(newObj.height);
            state.weight = Number(newObj.weight);
            state.breed = newObj.breed;
            state.color = newObj.color;
            console.log(newObj);
        }
    }
})
export const PetFormActions = petFormSlice.actions;
export default petFormSlice.reducer;