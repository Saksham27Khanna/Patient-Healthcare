
// import React, { useEffect, useState } from "react";
// import Loader from "../components/Loader";

// const Appointments = () => {
//     const [appointments, setAppointments] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const [formData, setFormData] = useState({
//         title: "",
//         doctor: "",
//         date: "",
//         time: "",
//         notes: "",
//     });

//     const [editId, setEditId] = useState(null);

//     // 🔒 ALWAYS FIXED DEFAULT
//     const defaultAppointments = [
//         {
//             id: "default-1",
//             title: "General Checkup",
//             doctor: "Dr. Sharma",
//             date: "2026-05-05",
//             time: "10:30 AM",
//             notes: "Routine visit",
//             status: "Upcoming",
//             isDefault: true,
//         },
//         {
//             id: "default-2",
//             title: "Dental Visit",
//             doctor: "Dr. Mehta",
//             date: "2026-05-06",
//             time: "12:00 PM",
//             notes: "Tooth pain",
//             status: "Upcoming",
//             isDefault: true,
//         },
//     ];

//     // ✅ LOAD DATA
//     useEffect(() => {
//         const stored = JSON.parse(localStorage.getItem("appointments")) || [];

//         // 🔥 Merge default + user data (IMPORTANT FIX)
//         const merged = [
//             ...defaultAppointments,
//             ...stored.filter((a) => !a.isDefault),
//         ];

//         setAppointments(merged);
//         setLoading(false);
//     }, []);

//     // input
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // ✅ ADD / UPDATE
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         let updated;

//         if (editId) {
//             updated = appointments.map((appt) =>
//                 appt.id === editId ? { ...appt, ...formData } : appt
//             );
//             setEditId(null);
//         } else {
//             const newAppt = {
//                 id: Date.now(),
//                 ...formData,
//                 status: "Upcoming",
//                 isDefault: false,
//             };
//             updated = [...appointments, newAppt];
//         }

//         // ❗ Save ONLY user appointments
//         const onlyUser = updated.filter((a) => !a.isDefault);

//         setAppointments(updated);
//         localStorage.setItem("appointments", JSON.stringify(onlyUser));

//         window.dispatchEvent(new Event("appointmentsUpdated"));

//         setFormData({
//             title: "",
//             doctor: "",
//             date: "",
//             time: "",
//             notes: "",
//         });
//     };

//     // ✅ STATUS UPDATE (default allowed but not deleted)
//     const updateStatus = (id, status) => {
//         const updated = appointments.map((appt) =>
//             appt.id === id ? { ...appt, status } : appt
//         );

//         const onlyUser = updated.filter((a) => !a.isDefault);

//         setAppointments(updated);
//         localStorage.setItem("appointments", JSON.stringify(onlyUser));

//         window.dispatchEvent(new Event("appointmentsUpdated"));
//     };

//     // ❌ DELETE ONLY USER
//     const handleDelete = (id) => {
//         const updated = appointments.filter(
//             (appt) => !(appt.id === id && !appt.isDefault)
//         );

//         const onlyUser = updated.filter((a) => !a.isDefault);

//         setAppointments(updated);
//         localStorage.setItem("appointments", JSON.stringify(onlyUser));

//         window.dispatchEvent(new Event("appointmentsUpdated"));
//     };

//     // ✏️ EDIT ONLY USER
//     const handleEdit = (appt) => {
//         if (appt.isDefault) return;

//         setFormData({
//             title: appt.title,
//             doctor: appt.doctor,
//             date: appt.date,
//             time: appt.time,
//             notes: appt.notes,
//         });

//         setEditId(appt.id);
//     };

//     if (loading) return <Loader />;

//     return (
//         <div className="p-4 sm:p-6">

//             <h1 className="text-xl sm:text-2xl font-bold mb-6">
//                 Appointment Manager
//             </h1>

//             {/* FORM */}
//             <form
//                 onSubmit={handleSubmit}
//                 className="bg-white p-4 rounded-xl shadow-md mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
//             >
//                 <input
//                     type="text"
//                     name="title"
//                     placeholder="Title"
//                     value={formData.title}
//                     onChange={handleChange}
//                     className="border p-2 rounded"
//                     required
//                 />

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
//                     placeholder="Time"
//                     value={formData.time}
//                     onChange={handleChange}
//                     className="border p-2 rounded"
//                     required
//                 />

//                 <textarea
//                     name="notes"
//                     placeholder="Notes"
//                     value={formData.notes}
//                     onChange={handleChange}
//                     className="border p-2 rounded sm:col-span-2"
//                 />

//                 <button className="sm:col-span-2 bg-blue-600 text-white py-2 rounded">
//                     {editId ? "Update Appointment" : "Add Appointment"}
//                 </button>
//             </form>

//             {/* LIST */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {appointments.map((appt) => (
//                     <div key={appt.id} className="bg-white p-4 rounded-xl shadow-md">

//                         <p className="font-semibold">{appt.title}</p>
//                         <p className="text-sm text-gray-500">{appt.doctor}</p>
//                         <p className="text-sm text-gray-500">
//                             {appt.date} • {appt.time}
//                         </p>
//                         <p className="text-xs text-gray-400">{appt.notes}</p>

//                         <span className="text-xs px-3 py-1 rounded-full mt-2 inline-block bg-yellow-100 text-yellow-600">
//                             {appt.status}
//                         </span>

//                         <div className="flex flex-wrap gap-2 mt-3">

//                             <button
//                                 onClick={() => updateStatus(appt.id, "Completed")}
//                                 className="text-xs bg-green-500 text-white px-2 py-1 rounded"
//                             >
//                                 Complete
//                             </button>

//                             <button
//                                 onClick={() => updateStatus(appt.id, "Cancelled")}
//                                 className="text-xs bg-red-500 text-white px-2 py-1 rounded"
//                             >
//                                 Cancel
//                             </button>

//                             {!appt.isDefault && (
//                                 <>
//                                     <button
//                                         onClick={() => handleEdit(appt)}
//                                         className="text-xs bg-blue-500 text-white px-2 py-1 rounded"
//                                     >
//                                         Edit
//                                     </button>

//                                     <button
//                                         onClick={() => handleDelete(appt.id)}
//                                         className="text-xs text-red-500"
//                                     >
//                                         Delete
//                                     </button>
//                                 </>
//                             )}
//                         </div>
//                     </div>
//                 ))}
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

    // 🔒 DEFAULT DATA (ONLY UI SIDE, NOT STORED)
    const defaultAppointments = [
        {
            id: "default-1",
            title: "General Checkup",
            doctor: "Dr. Sharma",
            date: "2026-05-05",
            time: "10:30 AM",
            notes: "Routine visit",
            status: "Upcoming",
            isDefault: true,
        },
        {
            id: "default-2",
            title: "Dental Visit",
            doctor: "Dr. Mehta",
            date: "2026-05-06",
            time: "12:00 PM",
            notes: "Tooth pain",
            status: "Upcoming",
            isDefault: true,
        },
    ];

    // ✅ LOAD DATA (FIXED)
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("appointments")) || [];

        // only user data comes from storage
        const merged = [...defaultAppointments, ...stored];

        setAppointments(merged);
        setLoading(false);
    }, []);

    // input handler
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ✅ SAVE TO STORAGE (ONLY USER DATA)
    const saveToStorage = (updatedList) => {
        const userOnly = updatedList.filter((a) => !a.isDefault);
        localStorage.setItem("appointments", JSON.stringify(userOnly));

        window.dispatchEvent(new Event("appointmentsUpdated"));
    };

    // ✅ ADD / UPDATE
    const handleSubmit = (e) => {
        e.preventDefault();

        let updated;

        if (editId) {
            updated = appointments.map((appt) =>
                appt.id === editId ? { ...appt, ...formData } : appt
            );
            setEditId(null);
        } else {
            const newAppt = {
                id: Date.now(),
                ...formData,
                status: "Upcoming",
                isDefault: false,
            };
            updated = [...appointments, newAppt];
        }

        setAppointments(updated);
        saveToStorage(updated);

        setFormData({
            title: "",
            doctor: "",
            date: "",
            time: "",
            notes: "",
        });
    };

    // ✅ STATUS UPDATE
    const updateStatus = (id, status) => {
        const updated = appointments.map((appt) =>
            appt.id === id ? { ...appt, status } : appt
        );

        setAppointments(updated);
        saveToStorage(updated);
    };

    // ❌ DELETE (ONLY USER DATA)
    const handleDelete = (id) => {
        const updated = appointments.filter((appt) => appt.id !== id);

        setAppointments(updated);
        saveToStorage(updated);
    };

    // ✏️ EDIT
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
                    placeholder="Title"
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
                    <div key={appt.id} className="bg-white p-4 rounded-xl shadow-md">

                        <p className="font-semibold">{appt.title}</p>
                        <p className="text-sm text-gray-500">{appt.doctor}</p>
                        <p className="text-sm text-gray-500">
                            {appt.date} • {appt.time}
                        </p>
                        <p className="text-xs text-gray-400">{appt.notes}</p>

                        <span className="text-xs px-3 py-1 rounded-full mt-2 inline-block bg-yellow-100 text-yellow-600">
                            {appt.status}
                        </span>

                        <div className="flex flex-wrap gap-2 mt-3">

                            <button
                                onClick={() => updateStatus(appt.id, "Completed")}
                                className="text-xs bg-green-500 text-white px-2 py-1 rounded"
                            >
                                Complete
                            </button>

                            <button
                                onClick={() => updateStatus(appt.id, "Cancelled")}
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
                                        onClick={() => handleDelete(appt.id)}
                                        className="text-xs text-red-500"
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