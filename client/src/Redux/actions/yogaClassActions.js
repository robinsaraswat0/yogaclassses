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
export const getClasses = (keyword,level,style,time,price) => async(dispatch) => {
    try {
        dispatch({type: ALL_CLASS_REQUEST});
        let link = `/yogaClass/getAllYogaClasses?keyword=${keyword}`;

        if(level.length){
            for(let i=0;i<level.length;i++){
                link = link.concat(`&level[${i}]=${level[i]}`)
            }
        }

        if(price.length){
            if(price[2]==3 || price[2] == 4){
                link = link.concat(`&price[gt]=${price[0]}&price[lt]=${price[1]}`)
            }else{
                link=link.concat(`&price[gte]=${price[0]}&price[lte]=${price[1]}`)
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