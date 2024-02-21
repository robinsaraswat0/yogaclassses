import {
    ALL_CLASS_REQUEST,
    ALL_CLASS_SUCCESS,
    ALL_CLASS_FAIL,
    CLASS_DETAILS_REQUEST,
    CLASS_DETAILS_SUCCESS,
    CLASS_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constants/yogaClassConstants"
import { YogaClassServices } from "../../supplier";
export const getClasses = (keyword,level,style,time) => async(dispatch) => {
    try {
        dispatch({type: ALL_CLASS_REQUEST});
        console.log(level,"level")
        let link = `/yogaClass/getAllYogaClasses?keyword=${keyword}`;

        console.log(link)
        if(level.length){
            for(let i=0;i<level.length;i++){
                link = link.concat(`&level[${i}]=${level[i]}`)
            }
        }

        if(style.length){
            for(let i=0;i<style.length;i++){
                link = link.concat(`&style[${i}]=${style[i]}`)
            }
        }

        if(time.length){
            for(let i=0;i<time.length;i++){
                link = link.concat(`&time[${i}]=${time[i]}`)
            }
        }

        console.log(link)

        const {data} = await YogaClassServices.getYogaClasses(link);

        dispatch({
            type: ALL_CLASS_SUCCESS,
            payload: data ,
        });

    } catch (error) {
        dispatch({
            type: ALL_CLASS_FAIL,
            payload: error.message,
        })
    }
};

export const getClassDetails = (id) => async(dispatch) => {
    try {
        dispatch({type: CLASS_DETAILS_REQUEST});

        const {data} = await YogaClassServices.getClassDetails(id)

        dispatch({
            type: CLASS_DETAILS_SUCCESS,
            payload: data.classDetails ,
        });

    } catch (error) {
        dispatch({
            type: CLASS_DETAILS_FAIL,
            payload: error.message,
        })
    }
};

export const clearErrors = () => async(dispatch) => {
    dispatch({type: CLEAR_ERRORS});
}