import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSignup = (e) => {
        e.preventDefault();

        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        const alreadyExists = storedUsers.find(
            (user) => user.email === form.email
        );

        if (alreadyExists) {
            alert("User already exists. Please login.");
            navigate("/login");
            return;
        }

        const updatedUsers = [...storedUsers, form];

        localStorage.setItem("users", JSON.stringify(updatedUsers));

        alert("Signup successful! Please login.");
        navigate("/login");
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center relative"
            style={{
                backgroundImage: "url('/background.jpg')" // 👈 same image from public folder
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Form */}
            <form
                onSubmit={handleSignup}
                className="relative bg-white/90 backdrop-blur-md p-5 sm:p-8 rounded-2xl shadow-lg w-full max-w-sm"
            >
                <h2 className="text-xl sm:text-2xl font-bold mb-5 text-center">
                    Signup
                </h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={form.name}
                    onChange={handleChange}
                    className="border p-2 rounded w-full mb-3 text-sm sm:text-base"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={form.email}
                    onChange={handleChange}
                    className="border p-2 rounded w-full mb-3 text-sm sm:text-base"
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={form.password}
                    onChange={handleChange}
                    className="border p-2 rounded w-full mb-4 text-sm sm:text-base"
                    required
                />

                <button className="bg-green-600 hover:bg-green-700 transition text-white w-full py-2 rounded mb-3 text-sm sm:text-base">
                    Signup
                </button>

                <p className="text-xs sm:text-sm text-center">
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-blue-600 cursor-pointer hover:underline"
                    >
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Signup;