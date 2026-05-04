// import React, { useEffect, useState } from "react";
// import Card from "../components/Card";
// import Loader from "../components/Loader";

// const Dashboard = () => {
//     const [appointments, setAppointments] = useState([]);
//     const [medications, setMedications] = useState([]);
//     const [notes, setNotes] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // 🔥 Load Appointments
//     const loadAppointments = () => {
//         const stored = localStorage.getItem("appointments");

//         if (stored) {
//             setAppointments(JSON.parse(stored));
//         } else {
//             const defaultData = [
//                 {
//                     id: 1,
//                     title: "General Checkup",
//                     doctor: "Dr. Sharma",
//                     date: "2026-05-05",
//                     time: "10:30 AM",
//                     status: "Upcoming",
//                 },
//                 {
//                     id: 2,
//                     title: "Dental Visit",
//                     doctor: "Dr. Mehta",
//                     date: "2026-05-06",
//                     time: "12:00 PM",
//                     status: "Upcoming",
//                 },
//             ];
//             setAppointments(defaultData);
//             localStorage.setItem("appointments", JSON.stringify(defaultData));
//         }
//     };

//     // 🔥 Load Medications
//     const loadMedications = () => {
//         const stored = localStorage.getItem("medications");
//         if (stored) {
//             setMedications(JSON.parse(stored));
//         } else {
//             setMedications([]);
//         }
//     };

//     // 🔥 Load Notes
//     const loadNotes = () => {
//         const stored = localStorage.getItem("notes");

//         if (stored) {
//             setNotes(JSON.parse(stored));
//         } else {
//             const defaultNotes = [
//                 {
//                     id: 1,
//                     content: "Ask doctor about headache duration",
//                     category: "General",
//                     date: "2026-05-02",
//                     isDefault: true,
//                 },
//                 {
//                     id: 2,
//                     content: "Check if vitamin supplements are required",
//                     category: "Health",
//                     date: "2026-05-02",
//                     isDefault: true,
//                 },
//             ];
//             setNotes(defaultNotes);
//             localStorage.setItem("notes", JSON.stringify(defaultNotes));
//         }
//     };

//     useEffect(() => {
//         loadAppointments();
//         loadMedications();
//         loadNotes();

//         window.addEventListener("appointmentsUpdated", loadAppointments);
//         window.addEventListener("medicationsUpdated", loadMedications);
//         window.addEventListener("notesUpdated", loadNotes);

//         setLoading(false);

//         return () => {
//             window.removeEventListener("appointmentsUpdated", loadAppointments);
//             window.removeEventListener("medicationsUpdated", loadMedications);
//             window.removeEventListener("notesUpdated", loadNotes);
//         };
//     }, []);

//     if (loading) return <Loader />;

//     return (
//         <div className="p-6">

//             <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

//             {/* 🔹 Summary Cards */}
//             <div className="grid grid-cols-3 gap-6 mb-8">
//                 <Card title="Appointments" value={appointments.length} />
//                 <Card title="Medications" value={medications.length} />
//                 <Card title="Notes" value={notes.length} />
//             </div>

//             {/* 🔹 Appointments */}
//             <div className="mb-8">
//                 <h2 className="text-lg font-semibold mb-3">
//                     Upcoming Appointments
//                 </h2>

//                 <div className="grid grid-cols-2 gap-4">
//                     {appointments.slice(0, 3).map((appt) => (
//                         <div key={appt.id} className="bg-white p-4 rounded-xl shadow-md">
//                             <p className="font-semibold">{appt.title}</p>
//                             <p className="text-sm text-gray-500">{appt.doctor}</p>
//                             <p className="text-sm text-gray-500">
//                                 {appt.date} • {appt.time}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* 🔹 Medications */}
//             <div className="mb-8">
//                 <h2 className="text-lg font-semibold mb-3">
//                     Today's Medication Reminder
//                 </h2>

//                 <div className="grid grid-cols-2 gap-4">
//                     {medications.slice(0, 3).map((med) => (
//                         <div key={med.id} className="bg-white p-4 rounded-xl shadow-md">
//                             <p className="font-medium">{med.name}</p>
//                             <span className="text-sm text-gray-500">
//                                 {med.time}
//                             </span>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* 🔹 Notes */}
//             <div className="mb-8">
//                 <h2 className="text-lg font-semibold mb-3">
//                     Notes / Questions
//                 </h2>

//                 <div className="grid grid-cols-2 gap-4">
//                     {notes.slice(0, 3).map((note) => (
//                         <div key={note.id} className="bg-white p-4 rounded-xl shadow-md">
//                             <p className="font-medium">{note.content}</p>

//                             <div className="flex justify-between text-sm text-gray-500 mt-2">
//                                 <span>{note.category}</span>
//                                 <span>{note.date}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* 🔹 Resources (NEW SECTION) */}
//             <div>
//                 <h2 className="text-lg font-semibold mb-3">
//                     Quick Resources
//                 </h2>

//                 <div className="grid grid-cols-2 gap-4">
//                     <div className="bg-white p-4 rounded-xl shadow-md">
//                         <p className="font-medium">Before Appointment Checklist</p>
//                         <p className="text-sm text-gray-500">
//                             Prepare questions and carry reports.
//                         </p>
//                     </div>

//                     <div className="bg-white p-4 rounded-xl shadow-md">
//                         <p className="font-medium">Medication Reminder Tips</p>
//                         <p className="text-sm text-gray-500">
//                             Use alarms and maintain routine.
//                         </p>
//                     </div>


//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";

const Dashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [medications, setMedications] = useState(() => {
        const stored = localStorage.getItem("medications");
        return stored ? JSON.parse(stored) : defaultMedications;
    });
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    const [userName, setUserName] = useState("Patient");

    const treatmentStage = "Ovarian Stimulation";
    const progress = 62;

    const loadAppointments = () => {
        const stored = localStorage.getItem("appointments");

        if (stored) {
            setAppointments(JSON.parse(stored));
        } else {
            const defaultData = [
                {
                    id: 1,
                    title: "General Checkup",
                    doctor: "Dr. Sharma",
                    date: "2026-05-05",
                    time: "10:30 AM",
                    status: "Upcoming",
                },
                {
                    id: 2,
                    title: "Dental Visit",
                    doctor: "Dr. Mehta",
                    date: "2026-05-06",
                    time: "12:00 PM",
                    status: "Upcoming",
                },
            ];
            setAppointments(defaultData);
            localStorage.setItem("appointments", JSON.stringify(defaultData));
        }
    };

    const loadMedications = () => {
        const stored = localStorage.getItem("medications");
        if (stored) {
            setMedications(JSON.parse(stored));
        } else {
            setMedications([]);
        }
    };

    const loadNotes = () => {
        const stored = localStorage.getItem("notes");

        if (stored) {
            setNotes(JSON.parse(stored));
        } else {
            const defaultNotes = [
                {
                    id: 1,
                    content: "Ask doctor about headache duration",
                    category: "General",
                    date: "2026-05-02",
                    isDefault: true,
                },
                {
                    id: 2,
                    content: "Check if vitamin supplements are required",
                    category: "Health",
                    date: "2026-05-02",
                    isDefault: true,
                },
            ];
            setNotes(defaultNotes);
            localStorage.setItem("notes", JSON.stringify(defaultNotes));
        }
    };

    const loadUser = () => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsed = JSON.parse(storedUser);
            setUserName(parsed.name || "Patient");
        }
    };

    useEffect(() => {
        loadAppointments();
        loadMedications();
        loadNotes();
        loadUser();

        window.addEventListener("appointmentsUpdated", loadAppointments);
        window.addEventListener("medicationsUpdated", loadMedications);
        window.addEventListener("notesUpdated", loadNotes);

        setLoading(false);

        return () => {
            window.removeEventListener("appointmentsUpdated", loadAppointments);
            window.removeEventListener("medicationsUpdated", loadMedications);
            window.removeEventListener("notesUpdated", loadNotes);
        };
    }, []);

    if (loading) return <Loader />;

    return (
        <div className="p-4 sm:p-6">

            <h1 className="text-xl sm:text-2xl font-bold mb-6">
                Welcome, {userName}
            </h1>

            {/* IVF Section */}
            <div className="bg-white p-4 sm:p-5 rounded-xl shadow-md mb-8">
                <h2 className="text-base sm:text-lg font-semibold mb-2">
                    IVF Treatment Stage
                </h2>

                <p className="text-gray-600 mb-3 text-sm sm:text-base">{treatmentStage}</p>

                <div className="w-full bg-gray-200 h-3 rounded-full">
                    <div
                        className="bg-blue-600 h-3 rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    {progress}% completed
                </p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
                <Card title="Appointments" value={appointments.length} />
                <Card title="Medications" value={medications.length} />
                <Card title="Notes" value={notes.length} />
            </div>

            {/* Appointments */}
            <div className="mb-8">
                <h2 className="text-base sm:text-lg font-semibold mb-3">
                    Upcoming Appointments
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {appointments.slice(0, 3).map((appt) => (
                        <div key={appt.id} className="bg-white p-4 rounded-xl shadow-md">
                            <p className="font-semibold">{appt.title}</p>
                            <p className="text-sm text-gray-500">{appt.doctor}</p>
                            <p className="text-sm text-gray-500">
                                {appt.date} • {appt.time}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Medications */}
            <div className="mb-8">
                <h2 className="text-base sm:text-lg font-semibold mb-3">
                    Today's Medication Reminder
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {medications.slice(0, 3).map((med) => (
                        <div key={med.id} className="bg-white p-4 rounded-xl shadow-md">
                            <p className="font-medium">{med.name}</p>
                            <span className="text-sm text-gray-500">
                                {med.time}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Notes */}
            <div className="mb-8">
                <h2 className="text-base sm:text-lg font-semibold mb-3">
                    Notes / Questions
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {notes.slice(0, 3).map((note) => (
                        <div key={note.id} className="bg-white p-4 rounded-xl shadow-md">
                            <p className="font-medium">{note.content}</p>

                            <div className="flex justify-between text-sm text-gray-500 mt-2">
                                <span>{note.category}</span>
                                <span>{note.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Resources */}
            <div>
                <h2 className="text-base sm:text-lg font-semibold mb-3">
                    Quick Resources
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-md">
                        <p className="font-medium">Before Appointment Checklist</p>
                        <p className="text-sm text-gray-500">
                            Prepare questions and carry reports.
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl shadow-md">
                        <p className="font-medium">Medication Reminder Tips</p>
                        <p className="text-sm text-gray-500">
                            Use alarms and maintain routine.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;