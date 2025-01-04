import React, { useContext, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashBoard from './components/Auth/DashBoard/EmployeeDashBoard';
import AdminDashBoard from './components/Auth/DashBoard/AdminDashBoard';
import { AuthContext } from './context/AuthProvider';
import { setLocalStorage } from './utils/LocalStorage';

setLocalStorage(); // Ensure localStorage is populated before fetching.

const App = () => {
    const [user, setUser] = useState(null);

    const handleLogin = (email, password) => {
        if (email === 'admin@me.com' && password === '123') {
            setUser('admin');
        } else if (email === 'user@me.com' && password === '123') {
            setUser('employee');
        } else {
            alert('Invalid Credentials');
        }
    };

    const userData = useContext(AuthContext); // Fetch data from AuthContext
    console.log('User data from context:', userData);

    return (
        <>
            {!user && <Login handleLogin={handleLogin} />}
            {user === 'admin' && <AdminDashBoard />}
            {user === 'employee' && <EmployeeDashBoard />}
        </>
    );
};

export default App;
















// import React, { useContext, useEffect, useState } from 'react'
// import Login from './components/Auth/Login'
// import EmployeeDashBoard from './components/Auth/DashBoard/EmployeeDashBoard'
// import AdminDashBoard from './components/Auth/DashBoard/AdminDashBoard'
// import CreateTask from './components/other/CreateTask'
// import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
// import { AuthContext } from './context/AuthProvider'

// const App = () => {

//   const [user, setUser] = useState(null)

//   const handleLogin = (email, password) => {
//     if (email == 'admin@me.com' && password == '123') {
//       setUser('admin')
//     }
//     else if (email == 'user@me.com' && password == '123') {
//       setUser('employee')
//     }
//     else {
//       alert("Invalid Credentials")
//     }
//   }

//   const userData = useContext(AuthContext)
//   console.log(userData);
  

//   // handleLogin('user@me.com',123)
//   // useEffect(() => {
//   //   console.log('User updated:', user);
//   // }, [user]);

//   return (
//     <>
//       {!user ? <Login handleLogin={handleLogin} /> : ''}
//       {user == 'admin' ? <AdminDashBoard /> : <EmployeeDashBoard />}
//       {/* <EmployeeDashBoard /> */}
//       {/* <AdminDashBoard /> */}
//     </>
//   )
// }

// export default App

// import React, { useContext, useState, useEffect } from 'react';
// import Login from './components/Auth/Login';
// import EmployeeDashBoard from './components/Auth/DashBoard/EmployeeDashBoard';
// import AdminDashBoard from './components/Auth/DashBoard/AdminDashBoard';
// import { AuthContext } from './context/AuthProvider';

// const App = () => {
//   const [user, setUser] = useState(null);
//   const userData = useContext(AuthContext); // Get user data from context

//   // Handling login (can be moved to context as well)
//   const handleLogin = (email, password) => {
//     if (email === 'admin@me.com' && password === '123') {
//       setUser('admin');
//     } else if (email === 'user@me.com' && password === '123') {
//       setUser('employee');
//     } else {
//       alert('Invalid Credentials');
//     }
//   };

//   // If the user data is fetched from context, you can directly set the state
//   useEffect(() => {
//     if (userData) {
//       console.log('User data from context:', userData);
//     }
//   }, [userData]);

//   return (
//     <>
//       {!user ? <Login handleLogin={handleLogin} /> : null}
//       {user === 'admin' ? <AdminDashBoard /> : <EmployeeDashBoard />}
//     </>
//   );
// };

// export default App;
