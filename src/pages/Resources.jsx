import React from "react";

const Resources = () => {
    const resources = [
        {
            id: 1,
            title: "Before Appointment Checklist",
            description:
                "Prepare your questions, carry previous reports, and note down any symptoms to discuss with your doctor.",
        },
        {
            id: 2,
            title: "Medication Reminder Tips",
            description:
                "Set alarms, use pill organizers, and maintain a routine to help you stay consistent with medications.",
        },
        {
            id: 3,
            title: "Questions to Ask Your Doctor",
            description:
                "Ask about diagnosis, treatment options, duration, and any lifestyle changes you should follow.",
        },
        {
            id: 4,
            title: "Track Your Health Notes",
            description:
                "Keep a simple record of symptoms, medications, and doctor advice for future reference.",
        },
        {
            id: 5,
            title: "Stay Organized",
            description:
                "Maintain your appointments, medications, and notes in one place for better health management.",
        },
        {
            id: 5,
            title: "Maintain Healthy Routine",
            description:
                "Follow a consistent sleep, diet, and activity schedule for better overall well-being",
        },
    ];

    return (
        <div className="p-4 sm:p-6">

            <h1 className="text-xl sm:text-2xl font-bold mb-6">
                Health Resources
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {resources.map((res) => (
                    <div
                        key={res.id}
                        className="bg-white p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition"
                    >
                        <h2 className="text-base sm:text-lg font-semibold mb-2">
                            {res.title}
                        </h2>

                        <p className="text-gray-600 text-sm sm:text-base wrap-break-words">
                            {res.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resources;