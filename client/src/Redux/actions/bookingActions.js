import {
    NEW_BOOKING_FAIL,
    NEW_BOOKING_REQUEST,
    NEW_BOOKING_SUCCESS,
    MY_BOOKINGS_REQUEST,
    MY_BOOKINGS_SUCCESS,
    MY_BOOKINGS_FAIL,
} from "../constants/bookingConstants"

import { BookingServices } from "../../supplier"

export const newBooking = (selectedDateFrom,selectedDateTo,teacher,id) => async (dispatch) => {
    try {
        dispatch({ type: NEW_BOOKING_REQUEST })
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        const booking={
            "from":selectedDateFrom,
            "to":selectedDateTo,
            "teacher":teacher
        }
        const { data } = await BookingServices.createBooking(booking,id, config)

        dispatch({ type: NEW_BOOKING_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: NEW_BOOKING_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const myBookings = () => async (dispatch) => {
    try {
        dispatch({ type: MY_BOOKINGS_REQUEST })

        const { data } = await BookingServices.getMyBookings()

        dispatch({ type: MY_BOOKINGS_SUCCESS, payload: data.BookingList })
    } catch (error) {
        dispatch({
            type: MY_BOOKINGS_FAIL,
            payload: error.response.data.message,
        })
    }
}
