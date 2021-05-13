import { NEXT_STEP} from "../action-types/Action-type";

export const nextStep =(nbr)=>(dispatch)=>{
    dispatch({
        type: NEXT_STEP,
        payload:nbr
    })
};
