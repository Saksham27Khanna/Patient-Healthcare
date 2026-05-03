import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        const existingUser = storedUsers.find(
            (user) =>
                user.email === form.email &&
                user.password === form.password
        );

        if (!existingUser) {
            alert("Invalid user. Please signup first.");
            return;
        }

        localStorage.setItem("user", JSON.stringify(existingUser));
        window.dispatchEvent(new Event("authChanged"));
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <form
                onSubmit={handleLogin}
                className="bg-white p-5 sm:p-8 rounded-xl shadow-md w-full max-w-sm"
            >
                <h2 className="text-xl sm:text-2xl font-bold mb-5 text-center">
                    Login
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

                <button className="bg-blue-600 text-white w-full py-2 rounded mb-3 text-sm sm:text-base">
                    Login
                </button>

                <p className="text-xs sm:text-sm text-center">
                    Don't have an account?{" "}
                    <span
                        onClick={() => navigate("/signup")}
                        className="text-blue-600 cursor-pointer"
                    >
                        Signup
                    </span>
                </p>
            </form>

        </div>
    );
};

export default Login;