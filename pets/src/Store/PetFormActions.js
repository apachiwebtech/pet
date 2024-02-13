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
export const addHeightActions = (data)=>{
    const userid = localStorage.getItem('pet_id');
    return async (dispatch)=>{
        axios.post(`${BASE_URL}/addHeight`, 
        {
        height: data,
        userid : userid
    })
        .then((response)=>{
            console.log(response);
            dispatch(PetFormActions.addheight({height : response.data.height}))

        }).catch((error)=>{
            console.log(error);
        })
    }
}
export const addWeightActions = (data)=>{
    const userid = localStorage.getItem('pet_id');
    return async (dispatch)=>{
        axios.post(`${BASE_URL}/addWeight`, 
        {
        weight: data,
        userid : userid
    })
        .then((response)=>{
            console.log(response);
            dispatch(PetFormActions.addweight({weight : response.data.weight}))

        }).catch((error)=>{
            console.log(error);
        })
    }
}
export const addBreedActions = (data)=>{
    const userid = localStorage.getItem('pet_id');
    return async (dispatch)=>{
        axios.post(`${BASE_URL}/addBreed`, 
        {
        breed: data,
        userid : userid
    })
        .then((response)=>{
            console.log(response);
            dispatch(PetFormActions.addBreed({breed : response.data.breed}))

        }).catch((error)=>{
            console.log(error);
        })
    }
}
export const addColorActions = (data)=>{
    const userid = localStorage.getItem('pet_id');
    return async (dispatch)=>{
        axios.post(`${BASE_URL}/addColor`, 
        {
        color: data,
        userid : userid
    })
        .then((response)=>{
            console.log(response);
            dispatch(PetFormActions.addColor({color : response.data.color}))

        }).catch((error)=>{
            console.log(error);
        })
    }
}
export const addDateActions = (data)=>{
    const userid = localStorage.getItem('pet_id');
    console.log(data, "from pet date actions ")
    return async (dispatch)=>{
        axios.post(`${BASE_URL}/addDate`, 
        {
        date: data,
        userid : userid
    })
        .then((response)=>{
            console.log(response);
            dispatch(PetFormActions.addDate({date : response.data.date}))

        }).catch((error)=>{
            console.log(error);
        })
    }
}
export const getProfileData=(data)=>{
    const userid = data;
    console.log(userid, "userid from actions")
    return async (dispatch)=>{
        axios.post(`${BASE_URL}/getPetProfiledata`,{userId : userid})
        .then((response)=>{
            console.log(response.data[0].gender, "from Form Actions");
            // dispatch(PetFormActions.putGender({gender : response.data[0].gender}))
            dispatch(PetFormActions.getProfileData(response.data[0]))
            console.log(response.data, "from actionsssssssss")
        })
        
        .catch((error)=>{
            console.log(error);
        })
    }
}