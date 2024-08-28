"use client";

import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { signOut } from "@firebase/auth";
import { auth } from "../_firebase/config";
import toast from "react-hot-toast";

export default function DashBoard() {
    const router = useRouter();
    const data = JSON.parse(localStorage.getItem("user") || "{}");

    console.log(data);
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setCookie("auth", "", { maxAge: 0 });
                localStorage.removeItem("user");
                router.push("/login");
                toast.success("LogOut success");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="flex">
            <h1 className="bg-blue-600 text-white px-3 py-4 text-xl">
                Welcome {data?.email}
            </h1>
            <button
                onClick={handleLogout}
                className="bg-black text-white rounded-md px-4 py-2 ml-4"
            >
                LogOut
            </button>
        </div>
    );
}