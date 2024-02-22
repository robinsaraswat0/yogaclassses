import React from "react"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { useState } from "react"
import auth from "../firebase.config"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "../Redux/actions/userActions"
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        mobile: "",
        otp: "",
    })

    const handleChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }))
    }

    const configureCaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier(
            auth,
            "sign-in-button",
            {
                size: "invisible",
                callback: (response) => {
                    this.onSignInSubmit()
                },
                defaultCountry: "IN",
            }
        )
    }
    const onSignInSumbit = (e) => {
        e.preventDefault()
        configureCaptcha()
        const phoneNumber = "+91" + formData.mobile

        dispatch(login(formData.mobile))

        const appVerifier = window.recaptchaVerifier

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult
            })
            .catch((error) => {
                // ...
            })
    }
    const onSubmitOTP = (e) => {
        e.preventDefault()
        const code = formData.otp
        window.confirmationResult
            .confirm(code)
            .then((result) => {
                const user = result.user
                // ...
            })
            .catch((error) => {
                // User couldn't sign in (bad verification code?)
                alert("user otp not verified")
                // ...
            })
        navigate("/myBookings")
    }

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <form
                                className="space-y-4 md:space-y-6"
                                onSubmit={onSignInSumbit}
                            >
                                <div>
                                    <div id="sign-in-button"></div>
                                    <div>
                                        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Mobile Number
                                        </div>
                                        <input
                                            type="number"
                                            name="mobile"
                                            placeholder="Mobile Number"
                                            required
                                            onChange={handleChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-4 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Send otp
                                </button>
                            </form>
                            <form onSubmit={onSubmitOTP}>
                                <div>
                                    <input
                                        type="number"
                                        name="otp"
                                        placeholder="OTP Number"
                                        required
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    <button
                                        type="submit"
                                        className="mt-3 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Verify OTP
                                    </button>
                                </div>
                            </form>
                            <Link to="/signUp">
                                <div className="mt-4 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    SignUp
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
