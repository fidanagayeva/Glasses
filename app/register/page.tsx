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
        <div className="h-screen flex">
            <div className="relative overflow-hidden flex w-1/2 bg-gradient-to-tr from-pink-200 to-cream-200 justify-around items-center hidden md:flex">
                <div className="animate-slide-in">
                    <h1 className="text-brown-800 font-extrabold text-5xl font-serif">Pastel Finance</h1>
                    <p className="text-brown-600 mt-3 text-lg animate-fade-in">Your cozy financial haven</p>
                    <button type="submit" className="block w-32 bg-brown-300 text-brown-800 mt-6 py-2 rounded-full font-bold hover:bg-brown-400 transition duration-300 ease-in-out transform hover:skew-y-3 hover:scale-110">
                        Explore
                    </button>
                </div>
                <div className="absolute -bottom-32 -left-40 w-96 h-96 bg-pink-100 rounded-full opacity-50 animate-pulse-slow"></div>
                <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-cream-100 rounded-full opacity-50 animate-zoom-in-out"></div>
                <div className="absolute -top-40 -right-0 w-96 h-96 bg-pink-100 rounded-full opacity-50 animate-pulse-slow"></div>
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-cream-100 rounded-full opacity-50 animate-zoom-in-out"></div>
            </div>
            <div className="flex md:w-1/2 justify-center py-12 items-center bg-cream-100">
                <form
                    onSubmit={(e) => {
                        formik.handleSubmit(e);
                    }}
                    className="bg-white p-8 rounded-lg shadow-lg animate-slide-up"
                >
                    <h1 className="text-brown-800 font-extrabold text-3xl mb-2">Welcome Back!</h1>
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
                        {loading ? <CustomLoadingSpinner /> : "Sign In"}
                    </button>
                    <span className="text-sm mt-4 block text-center text-brown-500 hover:text-pink-500 cursor-pointer transition duration-300 ease-in-out">Forgot Password?</span>
                </form>
            </div>
        </div>
    );
}