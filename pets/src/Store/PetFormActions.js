import axios from 'axios';
import { PetFormActions } from './PetFormSlice';
export const putPetGender = (data)=>{
    console.log(data, "from actions")
    const userid = localStorage.getItem('pet_id');
    return async (dispatch)=>{
        axios.put('http://localhost:8081/putGender', 
        {
        gender: data,
        userid : userid
    })
        .then((response)=>{
            console.log(response);
            dispatch(PetFormActions.putGender({gender : response.data.gender}))

        }).catch((error)=>{
            console.log(error);
        })
    }
}