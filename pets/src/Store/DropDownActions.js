import { DropDownActions } from "./DropDownSlice";
import axios from "axios";
import { BASE_URL } from '../component/Utils/BaseUrl';

export const getBreeds = ()=>{
    return async(dispatch)=>{
        axios.get(`${BASE_URL}/get_breeds`)
        .then((res)=>{
          console.log(res.data)
          dispatch(DropDownActions.getBreeds({
            breeds : res.data || []
          }))
        })
        .catch((error)=>{
          console.log(error);
        })
    }
}

export const getColors =()=>{
    return async(dispatch)=>{
        axios.get(`${BASE_URL}/get_color`)
        .then((res)=>{
          console.log(res.data)
          dispatch(DropDownActions.getColors({
            colors : res.data || [],
          }))
        })
        .catch((error)=>{
          console.log(error);
        })
    }

}
const switchLink=(link_param)=>{
    switch(link_param){
        case 1 : {

            return 'get_breeds';
        }
        case 2 :{

            return 'get_color'
        }
        default :{

            return 'get_breeds'
        }
    }
}