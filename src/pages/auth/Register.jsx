import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase_setup/firebase";

export default function Register() {
    const { register, handleSubmit, errors } = useForm();
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            if (data.password !== data.confirmPassword) {
                setError("Password and confirm password do not match.");
                return;
            }

            const userCredential = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            const user = userCredential.user;

            // Send email verification
            await sendEmailVerification(user);

            await updateProfile(user, {
                displayName: data.name,
            });

            const userDocRef = doc(db, "users", user.uid);

            await setDoc(userDocRef, {
                name: data.name,
                email: data.email,
            });

            setSuccessMessage("Account created successfully. Please check your email for verification.");
            setError(""); 

            setTimeout(() => {
                navigate("/SnapBack/login");
            }, 5000); 

        } catch (error) {
            switch (error.code) {
                case "auth/email-already-in-use":
                    setError("Email already in use");
                    break;
                case "auth/missing-email":
                    setError("Please enter an email address");
                    break;
                case "auth/invalid-email":
                    setError("Invalid email address");
                    break;
                case "auth/missing-password":
                    setError("Please enter a password");
                    break;
                case "auth/weak-password":
                    setError("Password must be at least 6 characters");
                    break;
                default:
                    setError(error.message);
            }
        }
    };

    return (

        <div className="bg-black flex flex-col md:flex-row h-screen items-center">

            <img src="/signup1.jpg" alt="Singupimage" className=" max-md:w-full w-7/12 h-full object-cover brightness-75" />
            <div className="absolute top-0 left-0 w-7/12 h-full flex items-center justify-center">
                <div className="text-white">
                    <span className="font-[playfairdisplay] text-white text-7xl max-md:hidden font-normal">Shadow Realm Retreat</span><br /><br />
                    <span className="font-[poppins] text-white text-opacity-60 max-md:hidden text-2xl font-medium"> Where gamers stealthily unite for <br />unforgettable adventures in the <br />virtual shadows</span>
                </div>
            </div>


            <div className="w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                <div className="w-full h-100">
                    <img className="max-lg:w-16 w-24 mx-auto max-md:relative max-lg:bottom-12" src="/Snapback-Logo.png" alt="SnapBack Logo" />
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 max-md:relative max-md:bottom-16">
                        <h1
                            className="font-[poppins] text-gray-200 text-center text-xl md:text-2xl font-semibold leading-tight mb-6 mt-10 max-md:mb-6 max-md:mt-6">
                            Create Account</h1>
                        {error && <p className="text-red-500">{error}</p>}
                        {successMessage && <p className="text-green-500">{successMessage}</p>} {/* Display success message */}
                        <div className="mt-4 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="bi bi-person text-xl text-gray-300 mt-1.5"></i>
                            </div>
                            <input
                                className="w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-black text-white pl-10"
                                type="text"
                                placeholder="Name" required
                                {...register("name")}
                            />
                        </div>
                        <div className="mt-4 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="bi bi-envelope text-gray-300 mt-1.5"></i>
                            </div>
                            <input
                                className="w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-black text-white pl-10"
                                type="email"
                                placeholder="Email"
                                {...register("email")}
                            />
                        </div>

                        <div className="mt-4 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="bi bi-key text-gray-300 mt-1.5"></i>
                            </div>
                            <input
                                className="w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-black text-white pl-10"
                                type="password"
                                placeholder="Password"
                                {...register("password")}
                            />
                        </div>
                        <div className="mt-4 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i className="bi bi-lock text-gray-300 mt-1.5"></i>
                            </div>
                            <input
                                className="w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-black text-white pl-10"
                                type="password"
                                placeholder="Confirm Password"
                                {...register("confirmPassword")}
                            />
                        </div>

                        <div className="text-right mt-4">
                            <Link to="/SnapBack/login"
                                className="text-sm font-semibold text-gray-400 hover:text-white focus:text-white">
                                Already registered?
                            </Link>


                            <button type="submit"
                                className="w-full mt-6 text-center px-4 py-4 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-[#0a174a] focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150">
                                REGISTER
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}