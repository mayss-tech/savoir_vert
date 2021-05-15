import { NEXT_STEP} from "../action-types/Action-type";

export const nextStep =(nbr)=>(dispatch,getState)=>{
    dispatch({
        type: NEXT_STEP,
        payload:nbr
    })
};
