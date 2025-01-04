// import React, { useState, createContext } from 'react';
// import { getLocalStorage } from '../utils/LocalStorage';

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const [userData, setUserData] = useState(getLocalStorage()); // Initialize state with fetched data

//     console.log('User data from localStorage:', userData);

//     return (
//         <AuthContext.Provider value={userData}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;



import React, { useState, createContext } from 'react';
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(getLocalStorage()); // Fetch data initially

    console.log('User data from localStorage in AuthProvider:', userData); // Debug log

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;












// import React, { useState } from 'react'
// import { createContext } from 'react'
// import { getLocalStorage } from '../utils/LocalStorage'

// export const AuthContext = createContext()
// const AuthProvider = ({ children }) => {

//     const [userData, setUserData] = useState(getLocalStorage())

//     const data = getLocalStorage()
//     console.log(data)
//     return (
//         <div>
//             <AuthContext.Provider value={"Rohan"}>
//                 {children}
//             </AuthContext.Provider>
//         </div>
//     )
// }

// export default AuthProvider























// import React, { useState, useEffect } from 'react';
// import { createContext } from 'react';
// import { getLocalStorage } from '../utils/LocalStorage';

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         const data = getLocalStorage();
//         console.log('Fetched data from localStorage:', data);
//         // If you want to fetch a user and set it, do it here
//         if (data) {
//             setUserData(data); // Set the userData to the fetched data from localStorage
//         }
//     }, []);

//     return (
//         <AuthContext.Provider value={userData}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;
