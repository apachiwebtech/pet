import {configureStore} from '@reduxjs/toolkit'
import DropDownReducer from './DropDownSlice';
import PetFormReducer from './PetFormSlice';
const store = configureStore({
    reducer : {
        dropdown : DropDownReducer,
        petform : PetFormReducer,
    }
})

export default store;