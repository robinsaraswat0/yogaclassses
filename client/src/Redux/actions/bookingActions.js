import {
    NEW_BOOKING_FAIL,
    NEW_BOOKING_REQUEST,
    NEW_BOOKING_SUCCESS,
    MY_BOOKINGS_REQUEST,
    MY_BOOKINGS_SUCCESS,
    MY_BOOKINGS_FAIL,
} from "../constants/bookingConstants"

export const newBooking = (booking) => async (dispatch) => {
    try {
        dispatch({ type: NEW_BOOKING_REQUEST })

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        const { data } = await BookingServices.createBooking(booking, config)

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

        dispatch({ type: MY_BOOKINGS_SUCCESS, payload: data.bookings })
    } catch (error) {
        dispatch({
            type: MY_BOOKINGS_FAIL,
            payload: error.response.data.message,
        })
    }
}
