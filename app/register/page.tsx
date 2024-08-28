"use client";

import { useFormik } from "formik";
import { LoginValidation } from "../login/LoginValidation";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../_firebase/config";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomLoadingSpinner from "../_components/CustomLoading";
import toast from "react-hot-toast";

export default function Register() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const formik = useFormik({
        validationSchema: LoginValidation,
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values) => {
            setLoading(true);
            await createUserWithEmailAndPassword(auth, values.email, values.password).then((res) => {
                if (res) {
                    toast.success("Register success");
                    router.push("/login");
                }
            }).catch((err) => {
                toast.error(err.message)
            })
            setLoading(false);
        },
    });
    return (
        <div className="h-screen flex flex-col md:flex-row">
            <div className="relative overflow-hidden flex md:w-1/2 w-full h-1/2 md:h-full bg-gradient-to-tr from-pink-200 to-cream-200 justify-around items-center">
                <div className="animate-slide-in flex flex-col items-center">
                    <img
                        src="https://woodmart.b-cdn.net/wp-content/themes/woodmart/images/wood-logo-dark.svg"
                        alt=""
                        className="w-3/4 h-auto transition duration-300 ease-in-out transform hover:scale-110 hover:-rotate-6"
                    />
                </div>
                <div className="absolute -bottom-32 -left-40 w-96 h-96 bg-pink-100 rounded-full opacity-50 animate-pulse-slow"></div>
                <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-cream-100 rounded-full opacity-50 animate-zoom-in-out"></div>
                <div className="absolute -top-40 -right-0 w-96 h-96 bg-pink-100 rounded-full opacity-50 animate-pulse-slow"></div>
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-cream-100 rounded-full opacity-50 animate-zoom-in-out"></div>
            </div>
            <div className="flex md:w-1/2 w-full h-1/2 md:h-full justify-center py-12 items-center bg-cream-100">
                <form
                    onSubmit={(e) => {
                        formik.handleSubmit(e);
                    }}
                    className="bg-white p-8 rounded-lg shadow-lg animate-slide-up w-full max-w-sm"
                >
                    <h1 className="text-brown-800 font-extrabold text-2xl md:text-3xl mb-2">Welcome Back!</h1>
                    <p className="text-sm font-light text-brown-500 mb-8">It's great to see you again</p>
                    <div className="flex items-center border-2 py-3 px-4 rounded-full mb-4 transition-all duration-300 hover:border-pink-400 focus-within:border-pink-400">
                        <input
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            className="pl-3 outline-none border-none w-full text-brown-700"
                            type="text"
                            name="email"
                            placeholder="Email Address"
                        />
                    </div>
                    {formik.errors.email && formik.touched.email ? (
                        <div className="text-red-600 text-xs mb-4">{formik.errors.email}</div>
                    ) : null}
                    <div className="flex items-center border-2 py-3 px-4 rounded-full transition-all duration-300 hover:border-pink-400 focus-within:border-pink-400">
                        <input
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            className="pl-3 outline-none border-none w-full text-brown-700"
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                    </div>
                    {formik.errors.password && formik.touched.password ? (
                        <div className="text-red-600 text-xs mb-4">{formik.errors.password}</div>
                    ) : null}
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center bg-pink-500 mt-6 py-3 rounded-full text-white font-bold hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-110"
                    >
                        {loading ? <CustomLoadingSpinner /> : "Register"}
                    </button>
                    <span className="text-sm mt-4 block text-center text-brown-500 hover:text-pink-500 cursor-pointer transition duration-300 ease-in-out">Forgot Password?</span>
                </form>
            </div>
        </div>

    );
}