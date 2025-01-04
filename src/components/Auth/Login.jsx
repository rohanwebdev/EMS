import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    // console.log(handleLogin)

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)  // Call the handleLogin function with the email and password values
        console.log("Hello guyzzzz, Form Submitted")
        setemail(" ")
        setpassword("")
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl '>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center '>
                    <input
                        value={email}
                        onChange={(e) => {
                            setemail(e.target.value)
                            // console.log(e.target.value)
                        }}
                        required className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 text-xl px-5 placeholder:text-gray-400 ' type="email" placeholder='Enter your email' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setpassword(e.target.value)
                            // console.log(e.target.value)
                        }}
                        required
                        className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 text-xl px-5 mt-3 placeholder:text-gray-400 '
                        type="password"
                        placeholder='Enter your password'
                        autoComplete="username"
                    />
                    <button className='hover:bg-emerald-700 font-semibold text-white outline-none border-none bg-emerald-600 rounded-full py-2 text-lg px-8 w-full placeholder:text-white mt-3'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login    