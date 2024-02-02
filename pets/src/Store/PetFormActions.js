import axios from 'axios';
import { PetFormActions } from './PetFormSlice';
import { BASE_URL } from '../component/Utils/BaseUrl';
export const putPetGender = (data)=>{
    console.log(data, "from actions")
    const userid = localStorage.getItem('pet_id');
    return async (dispatch)=>{
        axios.put(`${BASE_URL}/putGender`, 
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

export const getProfileData=(data)=>{
    const userid = data.id;
    console.log(userid, "userid from actions")
    return async (dispatch)=>{
        axios.post(`${BASE_URL}/getPetProfiledata`,{userId : userid})
        .then((response)=>{
            console.log(response.data[0].gender, "from Form Actions");
            dispatch(PetFormActions.putGender({gender : response.data[0].gender}))
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}