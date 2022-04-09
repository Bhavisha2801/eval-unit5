import { GET_DATA } from "./action";


export const reducer = ( store = {data : [] } , {type , payload} ) =>{
    switch(type){
        case GET_DATA:
            return {
                data : [...payload]
            }
        default :
            return store;    
    }
}