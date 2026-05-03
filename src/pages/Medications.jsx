// import React, { useEffect, useState } from "react";
// import Loader from "../components/Loader";

// const Medications = () => {
//     const [medications, setMedications] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const [formData, setFormData] = useState({
//         name: "",
//         dose: "",
//         time: "",
//     });

//     // ✅ Default medications (fixed)
//     const defaultMeds = [
//         {
//             id: 1,
//             name: "Paracetamol",
//             dose: "500mg",
//             time: "Morning",
//             status: "Active",
//             isDefault: true,
//         },
//         {
//             id: 2,
//             name: "Vitamin D",
//             dose: "1000 IU",
//             time: "Evening",
//             status: "Active",
//             isDefault: true,
//         },
//     ];

//     // Load from localStorage
//     useEffect(() => {
//         const stored = localStorage.getItem("medications");

//         if (stored) {
//             setMedications(JSON.parse(stored));
//         } else {
//             setMedications(defaultMeds);
//             localStorage.setItem("medications", JSON.stringify(defaultMeds));
//         }

//         setLoading(false);
//     }, []);

//     // input change
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     // Add medication (user only)
//     const handleAdd = (e) => {
//         e.preventDefault();

//         const newMed = {
//             id: Date.now(),
//             ...formData,
//             status: "Active",
//             isDefault: false,
//         };

//         const updated = [...medications, newMed];

//         setMedications(updated);
//         localStorage.setItem("medications", JSON.stringify(updated));

//         setFormData({
//             name: "",
//             dose: "",
//             time: "",
//         });
//     };

//     // Delete ONLY user meds
//     const handleDelete = (id) => {
//         const updated = medications.filter(
//             (med) => !(med.id === id && !med.isDefault)
//         );

//         setMedications(updated);
//         localStorage.setItem("medications", JSON.stringify(updated));
//     };

//     // Clear ONLY user meds
//     const handleClearAll = () => {
//         const confirmClear = window.confirm(
//             "This will remove only user-added medications."
//         );

//         if (confirmClear) {
//             const onlyDefaults = medications.filter((m) => m.isDefault);
//             setMedications(onlyDefaults);
//             localStorage.setItem("medications", JSON.stringify(onlyDefaults));
//         }
//     };

//     if (loading) return <Loader />;

//     return (
//         <div className="p-6">

//             {/* Header */}
//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-2xl font-bold">Medications</h1>

//                 <button
//                     onClick={handleClearAll}
//                     className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm"
//                 >
//                     Clear All Medications
//                 </button>
//             </div>

//             {/* Add Form */}
//             <form
//                 onSubmit={handleAdd}
//                 className="bg-white p-4 rounded-xl shadow-md mb-6 grid grid-cols-3 gap-4"
//             >
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Medicine Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="border p-2 rounded"
//                     required
//                 />

//                 <input
//                     type="text"
//                     name="dose"
//                     placeholder="Dose (e.g. 500mg)"
//                     value={formData.dose}
//                     onChange={handleChange}
//                     className="border p-2 rounded"
//                     required
//                 />

//                 <input
//                     type="text"
//                     name="time"
//                     placeholder="Time (Morning/Evening)"
//                     value={formData.time}
//                     onChange={handleChange}
//                     className="border p-2 rounded"
//                     required
//                 />

//                 <button className="col-span-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//                     Add Medication
//                 </button>
//             </form>

//             {/* List */}
//             <div className="grid grid-cols-2 gap-4">
//                 {medications.length === 0 ? (
//                     <p className="text-gray-500">No medications available</p>
//                 ) : (
//                     medications.map((med) => (
//                         <div
//                             key={med.id}
//                             className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center"
//                         >
//                             <div>
//                                 <p className="font-semibold">{med.name}</p>
//                                 <p className="text-sm text-gray-500">
//                                     {med.dose} • {med.time}
//                                 </p>
//                             </div>

//                             <div className="flex flex-col items-end gap-2">

//                                 <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-600">
//                                     {med.status}
//                                 </span>

//                                 {!med.isDefault && (
//                                     <button
//                                         onClick={() => handleDelete(med.id)}
//                                         className="text-xs text-red-500 hover:underline"
//                                     >
//                                         Delete
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

// export default Medications;





import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const Medications = () => {
    const [medications, setMedications] = useState([]);
    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        dosage: "",
        time: "",
        instructions: "",
    });

    const defaultMeds = [
        {
            id: 1,
            name: "Paracetamol",
            dosage: "500mg",
            time: "Morning",
            instructions: "After food",
            status: "Pending",
            isDefault: true,
        },
        {
            id: 2,
            name: "Vitamin D",
            dosage: "1000 IU",
            time: "Evening",
            instructions: "With milk",
            status: "Pending",
            isDefault: true,
        },
    ];

    useEffect(() => {
        const stored = localStorage.getItem("medications");

        if (stored) {
            setMedications(JSON.parse(stored));
        } else {
            setMedications(defaultMeds);
            localStorage.setItem("medications", JSON.stringify(defaultMeds));
        }

        setLoading(false);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAdd = (e) => {
        e.preventDefault();

        const newMed = {
            id: Date.now(),
            ...formData,
            status: "Pending",
            isDefault: false,
        };

        const updated = [...medications, newMed];

        setMedications(updated);
        localStorage.setItem("medications", JSON.stringify(updated));

        window.dispatchEvent(new Event("medicationsUpdated"));

        setFormData({
            name: "",
            dosage: "",
            time: "",
            instructions: "",
        });
    };

    const updateStatus = (id, newStatus) => {
        const updated = medications.map((med) =>
            med.id === id ? { ...med, status: newStatus } : med
        );

        setMedications(updated);
        localStorage.setItem("medications", JSON.stringify(updated));

        window.dispatchEvent(new Event("medicationsUpdated"));
    };

    const handleDelete = (id) => {
        const updated = medications.filter(
            (med) => !(med.id === id && !med.isDefault)
        );

        setMedications(updated);
        localStorage.setItem("medications", JSON.stringify(updated));

        window.dispatchEvent(new Event("medicationsUpdated"));
    };


    if (loading) return <Loader />;

    return (
        <div className="p-4 sm:p-6">

            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
                <h1 className="text-xl sm:text-2xl font-bold">
                    Medication Reminders
                </h1>
            </div>

            {/* Form */}
            <form
                onSubmit={handleAdd}
                className="bg-white p-4 rounded-xl shadow-md mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Medicine Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />

                <input
                    type="text"
                    name="dosage"
                    placeholder="Dosage (e.g. 500mg)"
                    value={formData.dosage}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />

                <input
                    type="text"
                    name="time"
                    placeholder="Time (Morning/Evening)"
                    value={formData.time}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />

                <input
                    type="text"
                    name="instructions"
                    placeholder="Instructions (After food etc.)"
                    value={formData.instructions}
                    onChange={handleChange}
                    className="border p-2 rounded"
                    required
                />

                <button className="sm:col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Add Reminder
                </button>
            </form>

            {/* List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {medications.length === 0 ? (
                    <p>No medications</p>
                ) : (
                    medications.map((med) => (
                        <div
                            key={med.id}
                            className="bg-white p-4 rounded-xl shadow-md"
                        >
                            <div className="mb-2">
                                <p className="font-semibold">{med.name}</p>
                                <p className="text-sm text-gray-500">
                                    {med.dosage} • {med.time}
                                </p>
                                <p className="text-xs text-gray-400">
                                    {med.instructions}
                                </p>
                            </div>

                            <span
                                className={`text-xs px-3 py-1 rounded-full ${med.status === "Taken"
                                    ? "bg-green-100 text-green-600"
                                    : med.status === "Missed"
                                        ? "bg-red-100 text-red-600"
                                        : "bg-yellow-100 text-yellow-600"
                                    }`}
                            >
                                {med.status}
                            </span>

                            <div className="flex flex-wrap gap-2 mt-3">

                                <button
                                    onClick={() =>
                                        updateStatus(med.id, "Taken")
                                    }
                                    className="text-xs bg-green-500 text-white px-2 py-1 rounded"
                                >
                                    Taken
                                </button>

                                <button
                                    onClick={() =>
                                        updateStatus(med.id, "Missed")
                                    }
                                    className="text-xs bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Missed
                                </button>

                                {!med.isDefault && (
                                    <button
                                        onClick={() => handleDelete(med.id)}
                                        className="text-xs text-red-500 hover:underline sm:ml-auto"
                                    >
                                        Delete
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Medications;