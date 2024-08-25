import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [adminData, setAdminData] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        setAdminData({ ...adminData, [e.target.name]: e.target.value })
    }

    const handleLogin = async () => {
        try {
            const response = await axios.post(`https://test.appristine.in/api/login`, adminData)
            if (response.data) {
                localStorage.setItem('token', response.data.token);
                navigate("/dashboard")
            }
            return response.data;
        } catch (error) {
            console.error('Login error:', error.response.data);
            throw error.response.data;
        }
    }
    return (
        <>
            <form class="max-w-sm mx-auto" onSubmit={handleLogin}>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="text" name='username' onChange={handleChange} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" name='password' onChange={handleChange} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </>
    )
}

export default Login