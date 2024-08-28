"use client";
import { useFormik } from "formik";
import { LoginValidation } from "./LoginValidation";
import CustomLoadingSpinner from "../_components/CustomLoading";
import { setCookie } from "cookies-next";
import React from "react";
import Link from "next/link";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../_firebase/config";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function Login() {
    const [isLoading, setIsLoading] = React.useState(false);
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: LoginValidation,
        onSubmit: async (values) => {
            setIsLoading(true);
            await signInWithEmailAndPassword(auth, values.email, values.password).then((res) => {
                if (res.user) {
                    toast.success("Login success");
                    localStorage.setItem("user", JSON.stringify(res.user));
                    setCookie("auth", res?.user?.accessToken, {
                        maxAge: 30 * 24 * 60 * 60,
                    });
                    router.push("dashbord");
                }
            }).catch((err) => {
                toast.error(err.message);
            })
            setIsLoading(false);
        },
    });

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-50 to-pink-100 relative overflow-hidden">
            <div className="absolute -bottom-32 -left-40 w-96 h-96 bg-pink-50 rounded-full opacity-30 animate-pulse-slow"></div>
            <div className="absolute -top-40 -right-0 w-96 h-96 bg-white rounded-full opacity-50 animate-pulse-slow"></div>
            <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-pink-100 rounded-full opacity-20 animate-zoom-in-out"></div>
            <div className="absolute -top-10 -left-20 w-96 h-96 bg-white rounded-full opacity-60 animate-pulse-slow"></div>
            <div className="flex flex-col bg-transparent shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md backdrop-blur-md">
                <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
                    Login To Your Account
                </div>
                <button className="relative mt-6 border rounded-md py-2 text-sm text-white bg-pink-400 hover:bg-pink-500 transition duration-300">
                    <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-white">
                        <i className="fab fa-facebook-f"></i>
                    </span>
                    <span>Login with Facebook</span>
                </button>
                <div className="relative mt-10 flex items-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-xs text-gray-400 uppercase">Or Login With Email</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <div className="mt-10">
                    <form onSubmit={(e) => formik.handleSubmit(e)}>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                                E-Mail Address:
                            </label>
                            <div className="relative">
                                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                    <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-pink-400 bg-white"
                                    placeholder="E-Mail Address"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </div>
                            {formik.errors.email && formik.touched.email ? (
                                <div className="text-red-500 text-xs">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                                Password:
                            </label>
                            <div className="relative">
                                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                    <span>
                                        <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-pink-400 bg-white"
                                    placeholder="Password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                            </div>
                            {formik.errors.password && formik.touched.password ? (
                                <div className="text-red-500 text-xs">{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <div className="flex items-center mb-6 -mt-4">
                            <div className="flex ml-auto">
                                <Link href="/register" className="inline-flex text-xs sm:text-sm text-pink-400 hover:text-pink-500">
                                    don't have an account?
                                </Link>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <button
                                type="submit"
                                className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-pink-400 hover:bg-pink-500 rounded py-2 w-full transition duration-150 ease-in"
                            >
                                {isLoading ? (
                                    <CustomLoadingSpinner />
                                ) : (
                                    <>
                                        <span className="mr-2 uppercase">Login</span>
                                        <span>
                                            <svg
                                                className="h-6 w-6"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex justify-center items-center mt-6">
                    <a href="#" target="_blank" className="inline-flex items-center font-bold text-pink-400 hover:text-pink-500 text-xs text-center">
                        <span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </span>
                        <span className="ml-2">You don't have an account?</span>
                    </a>
                </div>
            </div>
        </div>

    );
}