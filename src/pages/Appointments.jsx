// import React, { useEffect, useState } from "react";
// import Loader from "../components/Loader";

// const Appointments = () => {
//     const [appointments, setAppointments] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const [formData, setFormData] = useState({
//         doctor: "",
//         date: "",
//         time: "",
//     });

//     // ✅ Default appointments (always fixed)
//     const defaultAppointments = [
//         {
//             id: 1,
//             doctor: "Dr. Sharma",
//             date: "2026-05-05",
//             time: "10:30 AM",
//             status: "Confirmed",
//             isDefault: true,
//         },
//         {
//             id: 2,
//             doctor: "Dr. Mehta",
//             date: "2026-05-06",
//             time: "12:00 PM",
//             status: "Pending",
//             isDefault: true,
//         },
//     ];

//     // ✅ Load from localStorage
//     useEffect(() => {
//         const stored = localStorage.getItem("appointments");

//         if (stored) {
//             setAppointments(JSON.parse(stored));
//         } else {
//             setAppointments(defaultAppointments);
//             localStorage.setItem(
//                 "appointments",
//                 JSON.stringify(defaultAppointments)
//             );
//         }

//         setLoading(false);
//     }, []);

//     // input change
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // ✅ Add Appointment (user only)
//     const handleAdd = (e) => {
//         e.preventDefault();

//         const randomStatus = Math.random() < 0.4 ? "Pending" : "Confirmed";

//         const newAppointment = {
//             id: Date.now(),
//             ...formData,
//             status: randomStatus,
//             isDefault: false,
//         };

//         const updated = [...appointments, newAppointment];

//         setAppointments(updated);
//         localStorage.setItem("appointments", JSON.stringify(updated));

//         setFormData({
//             doctor: "",
//             date: "",
//             time: "",
//         });
//     };

//     // ❌ Cancel ONLY user appointments
//     const handleCancel = (id) => {
//         const updated = appointments.map((appt) =>
//             appt.id === id && !appt.isDefault
//                 ? { ...appt, status: "Cancelled" }
//                 : appt
//         );

//         setAppointments(updated);
//         localStorage.setItem("appointments", JSON.stringify(updated));
//     };

//     // 🧹 Clear ONLY user appointments
//     const handleClearAll = () => {
//         const confirmClear = window.confirm(
//             "This will delete only user-added appointments"
//         );

//         if (confirmClear) {
//             const onlyDefaults = appointments.filter((a) => a.isDefault);
//             setAppointments(onlyDefaults);
//             localStorage.setItem(
//                 "appointments",
//                 JSON.stringify(onlyDefaults)
//             );
//         }
//     };

//     if (loading) {
//         return <Loader />;
//     }

//     return (
//         <div className="p-6">

//             {/* Header */}
//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-2xl font-bold">Appointments</h1>

//                 <button
//                     onClick={handleClearAll}
//                     className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm"
//                 >
//                     Clear All Appointments
//                 </button>
//             </div>

//             {/* Add Appointment Form */}
//             <form
//                 onSubmit={handleAdd}
//                 className="bg-white p-4 rounded-xl shadow-md mb-6 grid grid-cols-3 gap-4"
//             >
//                 <input
//                     type="text"
//                     name="doctor"
//                     placeholder="Doctor Name"
//                     value={formData.doctor}
//                     onChange={handleChange}
//                     className="border p-2 rounded"
//                     required
//                 />

//                 <input
//                     type="date"
//                     name="date"
//                     value={formData.date}
//                     onChange={handleChange}
//                     className="border p-2 rounded"
//                     required
//                 />

//                 <input
//                     type="text"
//                     name="time"
//                     placeholder="Time (e.g. 10:30 AM)"
//                     value={formData.time}
//                     onChange={handleChange}
//                     className="border p-2 rounded"
//                     required
//                 />

//                 <button className="col-span-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//                     Book Appointment
//                 </button>
//             </form>

//             {/* Appointment List */}
//             <div className="grid grid-cols-2 gap-4">
//                 {appointments.length === 0 ? (
//                     <p className="text-gray-500">No appointments available</p>
//                 ) : (
//                     appointments.map((appt) => (
//                         <div
//                             key={appt.id}
//                             className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center"
//                         >
//                             <div>
//                                 <p className="font-semibold">{appt.doctor}</p>
//                                 <p className="text-sm text-gray-500">
//                                     {appt.date} • {appt.time}
//                                 </p>
//                             </div>

//                             <div className="flex flex-col items-end gap-2">

//                                 {/* Status */}
//                                 <span
//                                     className={`text-xs px-3 py-1 rounded-full ${appt.status === "Confirmed"
//                                         ? "bg-green-100 text-green-600"
//                                         : appt.status === "Cancelled"
//                                             ? "bg-red-100 text-red-600"
//                                             : "bg-yellow-100 text-yellow-600"
//                                         }`}
//                                 >
//                                     {appt.status}
//                                 </span>

//                                 {/* Cancel button only for user appointments */}
//                                 {appt.status !== "Cancelled" && !appt.isDefault && (
//                                     <button
//                                         onClick={() => handleCancel(appt.id)}
//                                         className="text-xs text-red-500 hover:underline"
//                                     >
//                                         Cancel
//                                     </button>
//                                 )}
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Appointments;









import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        title: "",
        doctor: "",
        date: "",
        time: "",
        notes: "",
    });

    const [editId, setEditId] = useState(null);

    const defaultAppointments = [
        {
            id: 1,
            title: "General Checkup",
            doctor: "Dr. Sharma",
            date: "2026-05-05",
            time: "10:30 AM",
            notes: "Routine visit",
            status: "Upcoming",
            isDefault: true,
        },
        {
            id: 2,
            title: "Dental Visit",
            doctor: "Dr. Mehta",
            date: "2026-05-06",
            time: "12:00 PM",
            notes: "Tooth pain",
            status: "Upcoming",
            isDefault: true,
        },
    ];

    useEffect(() => {
        const stored = localStorage.getItem("appointments");

        if (stored) {
            setAppointments(JSON.parse(stored));
        } else {
            setAppointments(defaultAppointments);
            localStorage.setItem(
                "appointments",
                JSON.stringify(defaultAppointments)
            );
        }

        setLoading(false);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editId) {
            const updated = appointments.map((appt) =>
                appt.id === editId
                    ? { ...appt, ...formData }
                    : appt
            );

            setAppointments(updated);
            localStorage.setItem("appointments", JSON.stringify(updated));

            setEditId(null);
        } else {
            const newAppt = {
                id: Date.now(),
                ...formData,
                status: "Upcoming",
                isDefault: false,
            };

            const updated = [...appointments, newAppt];

            setAppointments(updated);
            localStorage.setItem("appointments", JSON.stringify(updated));
        }

        window.dispatchEvent(new Event("appointmentsUpdated"));

        setFormData({
            title: "",
            doctor: "",
            date: "",
            time: "",
            notes: "",
        });
    };

    const updateStatus = (id, status) => {
        const updated = appointments.map((appt) =>
            appt.id === id ? { ...appt, status } : appt
        );

        setAppointments(updated);
        localStorage.setItem("appointments", JSON.stringify(updated));

        window.dispatchEvent(new Event("appointmentsUpdated"));
    };

    const handleDelete = (id) => {
        const updated = appointments.filter(
            (appt) => !(appt.id === id && !appt.isDefault)
        );

        setAppointments(updated);
        localStorage.setItem("appointments", JSON.stringify(updated));

        window.dispatchEvent(new Event("appointmentsUpdated"));
    };

    const handleEdit = (appt) => {
        if (appt.isDefault) return;

        setFormData({
            title: appt.title,
            doctor: appt.doctor,
            date: appt.date,
            time: appt.time,
            notes: appt.notes,
        });

        setEditId(appt.id);
    };

    if (loading) return <Loader />;

    return (
        <div className="p-4 sm:p-6">

            <h1 className="text-xl sm:text-2xl font-bold mb-6">
                Appointment Manager
            </h1>

            {/* FORM */}
            <form
                onSubmit={handleSubmit}
                className="bg-white p-4 rounded-xl shadow-md mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Title (Checkup, Dental...)"
                    value={formData.title}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />

                <input
                    type="text"
                    name="doctor"
                    placeholder="Doctor Name"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />

                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />

                <input
                    type="text"
                    name="time"
                    placeholder="Time"
                    value={formData.time}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />

                <textarea
                    name="notes"
                    placeholder="Notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="border p-2 rounded sm:col-span-2"
                />

                <button className="sm:col-span-2 bg-blue-600 text-white py-2 rounded">
                    {editId ? "Update Appointment" : "Add Appointment"}
                </button>
            </form>

            {/* LIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {appointments.map((appt) => (
                    <div
                        key={appt.id}
                        className="bg-white p-4 rounded-xl shadow-md"
                    >
                        <p className="font-semibold">{appt.title}</p>
                        <p className="text-sm text-gray-500">
                            {appt.doctor}
                        </p>
                        <p className="text-sm text-gray-500">
                            {appt.date} • {appt.time}
                        </p>
                        <p className="text-xs text-gray-400">
                            {appt.notes}
                        </p>

                        <span
                            className={`text-xs px-3 py-1 rounded-full mt-2 inline-block ${appt.status === "Completed"
                                ? "bg-green-100 text-green-600"
                                : appt.status === "Cancelled"
                                    ? "bg-red-100 text-red-600"
                                    : "bg-yellow-100 text-yellow-600"
                                }`}
                        >
                            {appt.status}
                        </span>

                        <div className="flex flex-wrap gap-2 mt-3">

                            <button
                                onClick={() =>
                                    updateStatus(appt.id, "Completed")
                                }
                                className="text-xs bg-green-500 text-white px-2 py-1 rounded"
                            >
                                Complete
                            </button>

                            <button
                                onClick={() =>
                                    updateStatus(appt.id, "Cancelled")
                                }
                                className="text-xs bg-red-500 text-white px-2 py-1 rounded"
                            >
                                Cancel
                            </button>

                            {!appt.isDefault && (
                                <>
                                    <button
                                        onClick={() => handleEdit(appt)}
                                        className="text-xs bg-blue-500 text-white px-2 py-1 rounded"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() =>
                                            handleDelete(appt.id)
                                        }
                                        className="text-xs text-red-500 sm:ml-auto"
                                    >
                                        Delete
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Appointments;