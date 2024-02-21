import {
    ALL_CLASS_FAIL,
    ALL_CLASS_REQUEST,
    ALL_CLASS_SUCCESS,
    CLASS_DETAILS_REQUEST,
    CLASS_DETAILS_SUCCESS,
    CLASS_DETAILS_FAIL,
    CLEAR_ERRORS,

} from "../constants/yogaClassConstants"

export const yogaClassesReducer = (state={classes:[]},action) =>{

    switch(action.type){
        case ALL_CLASS_REQUEST:
            return {
                loading:true,
                classes:[]
            };
        case ALL_CLASS_SUCCESS:
            return {
                loading:false,
                classes:action.payload.classes,
            };
        case ALL_CLASS_FAIL:
            return {
                loading:false,
                error:action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            };
        default:
            return state;

    }

};

export const classDetailsReducer = (state={classD: {} },action) =>{

    switch(action.type){
        case CLASS_DETAILS_REQUEST:
            return {
                loading:true,
                ...state,
            };
        case CLASS_DETAILS_SUCCESS:
            return {
                loading:false,
                classD: action.payload,
            };
        case CLASS_DETAILS_FAIL:
            return {
                loading:false,
                error:action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            };
        default:
            return state;

    }

};