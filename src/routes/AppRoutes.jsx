import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

// Layout
import MainLayout from "../layout/MainLayout";

// Pages
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Appointments from "../pages/Appointments";
import Medications from "../pages/Medications";
import Notes from "../pages/Notes";
import Resources from "../pages/Resources";

// 🔥 Check login
const isAuthenticated = () => {
    return localStorage.getItem("user");
};

// 🔒 Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* 🔥 Default Route (IMPORTANT FIX) */}
                <Route
                    path="/"
                    element={
                        isAuthenticated()
                            ? <Navigate to="/dashboard" />
                            : <Navigate to="/login" />
                    }
                />

                {/* Auth Routes */}
                <Route
                    path="/login"
                    element={
                        isAuthenticated()
                            ? <Navigate to="/dashboard" />
                            : <Login />
                    }
                />

                <Route
                    path="/signup"
                    element={
                        isAuthenticated()
                            ? <Navigate to="/dashboard" />
                            : <Signup />
                    }
                />

                {/* Protected Routes */}
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <MainLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="appointments" element={<Appointments />} />
                    <Route path="medications" element={<Medications />} />
                    <Route path="notes" element={<Notes />} />
                    <Route path="resources" element={<Resources />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;