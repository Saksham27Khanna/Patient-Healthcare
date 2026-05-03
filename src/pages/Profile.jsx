import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Profile = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        age: "",
        gender: "",
    });

    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("user");

        if (stored) {
            setUser(JSON.parse(stored));
        } else {
            const defaultUser = {
                name: "Patient",
                email: "patient@email.com",
                age: "25",
                gender: "Male",
            };

            setUser(defaultUser);
            localStorage.setItem("user", JSON.stringify(defaultUser));
        }

        setLoading(false);
    }, []);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        localStorage.setItem("user", JSON.stringify(user));
        window.dispatchEvent(new Event("userUpdated"));
        setIsEditing(false);
    };

    if (loading) return <Loader />;

    return (
        <div className="p-4 sm:p-6 max-w-xl mx-auto">

            <h1 className="text-xl sm:text-2xl font-bold mb-6">
                Profile
            </h1>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">

                {/* Name */}
                <div className="mb-4">
                    <label className="block text-xs sm:text-sm text-gray-500 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full text-sm sm:text-base"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-xs sm:text-sm text-gray-500 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full text-sm sm:text-base"
                    />
                </div>

                {/* Age */}
                <div className="mb-4">
                    <label className="block text-xs sm:text-sm text-gray-500 mb-1">
                        Age
                    </label>
                    <input
                        type="number"
                        name="age"
                        value={user.age}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full text-sm sm:text-base"
                    />
                </div>

                {/* Gender */}
                <div className="mb-6">
                    <label className="block text-xs sm:text-sm text-gray-500 mb-1">
                        Gender
                    </label>
                    <select
                        name="gender"
                        value={user.gender}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="border p-2 rounded w-full text-sm sm:text-base"
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                    {isEditing ? (
                        <>
                            <button
                                onClick={handleSave}
                                className="bg-green-600 text-white px-4 py-2 rounded w-full sm:w-auto"
                            >
                                Save
                            </button>

                            <button
                                onClick={() => setIsEditing(false)}
                                className="bg-gray-400 text-white px-4 py-2 rounded w-full sm:w-auto"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto"
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;