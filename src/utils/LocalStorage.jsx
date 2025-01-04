// const employees = [
//     {
//         "id": 1,
//         "email": "employee1@example.com",
//         "password": "123",
//         "tasks": [
//             {
//                 "title": "Task 1",
//                 "description": "Complete the monthly report",
//                 "active": true,
//                 "newTask": false,
//                 "completed": false,
//                 "failed": false,
//                 "date": "2024-12-28",
//                 "category": "Reporting"
//             },
//             {
//                 "title": "Task 2",
//                 "description": "Attend client meeting",
//                 "active": false,
//                 "newTask": true,
//                 "completed": false,
//                 "failed": false,
//                 "date": "2024-12-29",
//                 "category": "Meeting"
//             }
//         ]
//     },
//     {
//         "id": 2,
//         "email": "employee2@example.com",
//         "password": "123",
//         "tasks": [
//             {
//                 "title": "Task 1",
//                 "description": "Update project documentation",
//                 "active": false,
//                 "newTask": true,
//                 "completed": true,
//                 "failed": false,
//                 "date": "2024-12-27",
//                 "category": "Documentation"
//             },
//             {
//                 "title": "Task 2",
//                 "description": "Fix critical bug",
//                 "active": true,
//                 "newTask": false,
//                 "completed": false,
//                 "failed": false,
//                 "date": "2024-12-28",
//                 "category": "Development"
//             }
//         ]
//     },
//     {
//         "id": 3,
//         "email": "employee3@example.com",
//         "password": "123",
//         "tasks": [
//             {
//                 "title": "Task 1",
//                 "description": "Test new software feature",
//                 "active": false,
//                 "newTask": true,
//                 "completed": true,
//                 "failed": false,
//                 "date": "2024-12-26",
//                 "category": "Testing"
//             },
//             {
//                 "title": "Task 2",
//                 "description": "Submit timesheet",
//                 "active": false,
//                 "newTask": false,
//                 "completed": true,
//                 "failed": false,
//                 "date": "2024-12-25",
//                 "category": "Administrative"
//             },
//             {
//                 "title": "Task 3",
//                 "description": "Organize team meeting",
//                 "active": true,
//                 "newTask": true,
//                 "completed": false,
//                 "failed": false,
//                 "date": "2024-12-29",
//                 "category": "Management"
//             }
//         ]
//     },
//     {
//         "id": 4,
//         "email": "employee4@example.com",
//         "password": "123",
//         "tasks": [
//             {
//                 "title": "Task 1",
//                 "description": "Prepare sales pitch",
//                 "active": true,
//                 "newTask": false,
//                 "completed": false,
//                 "failed": false,
//                 "date": "2024-12-30",
//                 "category": "Sales"
//             }
//         ]
//     },
//     {
//         "id": 5,
//         "email": "employee5@example.com",
//         "password": "123",
//         "tasks": [
//             {
//                 "title": "Task 1",
//                 "description": "Update website design",
//                 "active": true,
//                 "newTask": true,
//                 "completed": false,
//                 "failed": false,
//                 "date": "2024-12-31",
//                 "category": "Design"
//             },
//             {
//                 "title": "Task 2",
//                 "description": "Write blog post",
//                 "active": false,
//                 "newTask": false,
//                 "completed": true,
//                 "failed": false,
//                 "date": "2024-12-24",
//                 "category": "Content Creation"
//             }
//         ]
//     }
// ]

// const admin = [
//     {
//         "id": 1,
//         "email": "admin@example.com",
//         "password": "123"
//     }
// ];

// export const setLocalStorage = ()=>{
//     localStorage.setItem('employees', JSON.stringify(employees))
//     localStorage.setItem('admin', JSON.stringify(admin))
// }
// export const getLocalStorage = ()=>{
//     const employees = JSON.parse(localStorage.getItem('employees'))
//     const admin = JSON.parse(localStorage.getItem('admin'))
//     // console.log(employees, admin)
//     return {employees, admin}
// }

//The code 















// const employees = [
//     {
//         "id": 1,
//         "email": "employee1@example.com",
//         "password": "123",
//         "tasks": [
//             {
//                 "title": "Task 1",
//                 "description": "Complete the monthly report",
//                 "active": true,
//                 "newTask": false,
//                 "completed": false,
//                 "failed": false,
//                 "date": "2024-12-28",
//                 "category": "Reporting"
//             },
//             {
//                 "title": "Task 2",
//                 "description": "Attend client meeting",
//                 "active": false,
//                 "newTask": true,
//                 "completed": false,
//                 "failed": false,
//                 "date": "2024-12-29",
//                 "category": "Meeting"
//             }
//         ]
//     },
//     {
//         "id": 2,
//         "email": "employee2@example.com",
//         "password": "123",
//         "tasks": [
//             {
//                 "title": "Task 1",
//                 "description": "Update project documentation",
//                 "active": false,
//                 "newTask": true,
//                 "completed": true,
//                 "failed": false,
//                 "date": "2024-12-27",
//                 "category": "Documentation"
//             },
//             {
//                 "title": "Task 2",
//                 "description": "Fix critical bug",
//                 "active": true,
//                 "newTask": false,
//                 "completed": false,
//                 "failed": false,
//                 "date": "2024-12-28",
//                 "category": "Development"
//             }
//         ]
//     },
//     {
//         "id": 3,
//         "email": "employee3@example.com",
//         "password": "123",
//         "tasks": [
//             {
//                 "title": "Task 1",
//                 "description": "Test new software feature",
//                 "active": false,
//                 "newTask": true,
//                 "completed": true,
//                 "failed": false,
//                 "date": "2024-12-26",
//                 "category": "Testing"
//             },
//             {
//                 "title": "Task 2",
//                 "description": "Submit timesheet",
//                 "active": false,
//                 "newTask": false,
//                 "completed": true,
//                 "failed": false,
//                 "date": "2024-12-25",
//                 "category": "Administrative"
//             },
//             {
//                 "title": "Task 3",
//                 "description": "Organize team meeting",
//                 "active": true,
//                 "newTask": true,
//                 "completed": false,
//                 "failed": false,
//                 "date": "2024-12-29",
//                 "category": "Management"
//             }
//         ]
//     },
//     {
//         "id": 4,
//         "email": "employee4@example.com",
//         "password": "123",
//         "tasks": [
//             {
//                 "title": "Task 1",
//                 "description": "Prepare sales pitch",
//                 "active": true,
//                 "newTask": false,
//                 "completed": false,
//                 "failed": false,
//                 "date": "2024-12-30",
//                 "category": "Sales"
//             }
//         ]
//     },
//     {
//         "id": 5,
//         "email": "employee5@example.com",
//         "password": "123",
//         "tasks": [
//             {
//                 "title": "Task 1",
//                 "description": "Update website design",
//                 "active": true,
//                 "newTask": true,
//                 "completed": false,
//                 "failed": false,
//                 "date": "2024-12-31",
//                 "category": "Design"
//             },
//             {
//                 "title": "Task 2",
//                 "description": "Write blog post",
//                 "active": false,
//                 "newTask": false,
//                 "completed": true,
//                 "failed": false,
//                 "date": "2024-12-24",
//                 "category": "Content Creation"
//             }
//         ]
//     }
// ];

// const admin = [
//     {
//         "id": 1,
//         "email": "admin@example.com",
//         "password": "123"
//     }
// ];

// export const setLocalStorage = () => {
//     localStorage.setItem('employees', JSON.stringify(employees));
//     localStorage.setItem('admin', JSON.stringify(admin));
// };

// export const getLocalStorage = () => {
//     // const employees = JSON.parse(localStorage.getItem('employees'));
//     const employees = JSON.parse(localStorage.getItem('employees'));
//     const admin = JSON.parse(localStorage.getItem('admin'));
//     return { employees, admin };
//     // console.log(employees, admin)
// };



const employees = [
    {
        id: 1,
        email: "employee1@example.com",
        password: "123",
        tasks: [
            {
                title: "Task 1",
                description: "Complete the monthly report",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                date: "2024-12-28",
                category: "Reporting"
            },
            {
                title: "Task 2",
                description: "Attend client meeting",
                active: false,
                newTask: true,
                completed: false,
                failed: false,
                date: "2024-12-29",
                category: "Meeting"
            }
        ]
    },
    {
        id: 2,
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                title: "Task 1",
                description: "Update project documentation",
                active: false,
                newTask: true,
                completed: true,
                failed: false,
                date: "2024-12-27",
                category: "Documentation"
            },
            {
                title: "Task 2",
                description: "Fix critical bug",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                date: "2024-12-28",
                category: "Development"
            }
        ]
    },
    // Additional employee data as in your original code
];

const admin = [
    {
        id: 1,
        email: "admin@example.com",
        password: "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
};

// export const getLocalStorage = () => {
//     const employees = JSON.parse(localStorage.getItem('employees')); // Corrected key usage
//     const admin = JSON.parse(localStorage.getItem('admin'));         // Corrected key usage
//     console.log('Fetched data:', { employees, admin });
//     return { employees, admin }; // Return data for usage
// };
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || []; // Fallback to empty array
    const admin = JSON.parse(localStorage.getItem('admin')) || [];        // Fallback to empty array

    console.log('Fetched data from localStorage:', { employees, admin }); // Add debug log
    return { employees, admin };
};


