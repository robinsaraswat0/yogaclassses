import {
    NEW_BOOKING_REQUEST,
    NEW_BOOKING_SUCCESS,
    NEW_BOOKING_FAIL,
    MY_BOOKINGS_REQUEST,
    MY_BOOKINGS_SUCCESS,
    MY_BOOKINGS_FAIL,
    CLEAR_ERRORS
} from "../constants/bookingConstants"

export const newBookingReducer = (state = {}, action) => {
    switch (action.type) {
      case NEW_BOOKING_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case NEW_BOOKING_SUCCESS:
        return {
          loading: false,
          booking: action.payload,
        };
  
      case NEW_BOOKING_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };


  export const myBookingsReducer = (state = { bookings: [] }, action) => {
    switch (action.type) {
      case MY_BOOKINGS_REQUEST:
        return {
          loading: true,
        };
  
      case MY_BOOKINGS_SUCCESS:
        return {
          loading: false,
          bookings: action.payload,
        };
  
      case MY_BOOKINGS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };