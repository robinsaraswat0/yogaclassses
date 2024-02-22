import axios from "axios";

export const backendUrl = "http://localhost:4000/api/v1";

const instance = axios.create({
    baseURL: backendUrl,
    withCredentials:true,
    headers:{
        "Access-Control-Allow-Origin":"http://localhost:4000"
    }
});

const responseBody = (response) => response;

const requests = {
  get: (url, body, options) =>
    instance.get(url, body, options).then(responseBody),

  post: (url, body, options) =>
    instance.post(url, body, options).then(responseBody),

  put: (url, body, options) =>
    instance.put(url, body, options).then(responseBody),

  delete: (url, options) => instance.delete(url, options).then(responseBody),
};

export const AuthServices = {
    register:(signupData,options) => requests.post("/auth/signup",signupData,options),
    login: (loginData, options) => requests.post(`/auth/login`, loginData, options),
    loadUser:() => requests.get("/auth/me"),
    logoutUser: () => requests.get("/auth/logout")
};

export const BookingServices = {
    createBooking:(booking,classId) => requests.post(`/booking/createBooking/${classId}`,booking),
    getMyBookings:()=> requests.get("/booking/getBookings")
}

export const YogaClassServices = {
    getYogaClasses:(link)=>requests.get(link),
    getClassDetails:(id)=>requests.get(`/yogaClass/getClassDetails/${id}`)
}