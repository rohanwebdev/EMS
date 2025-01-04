import React from 'react'
import Header from '../../other/Header'
import CreateTask from '../../other/CreateTask'
import AllTAsk from '../../other/AllTAsk'

const AdminDashBoard = () => {
    return (
        <div className='h-screen w-full p-7'>
            <Header />
            <CreateTask />
            <AllTAsk />
        </div>
    )
}

export default AdminDashBoard