import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaCarSide } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Form = () => {

    const [carModal, setCarModal] = useState(false);
    const [carType, setCarType] = useState(false);
    const [carColor, setCarColor] = useState(false)
    const [reservation, setReservation] = useState({
        guestName: '',
        licensePlate: '',
        guestMobile: "",
        startDate: "",
        startTime: "",
        checkoutDate: "",
        checkoutTime: "",
        location: "",
        rate: "",
        car: [{ carMake: ""}, {carType: ""},{carColor: ""}],
        checkbox: ""
    })
    const [location , setLocation] = useState('');

    const navigation = useNavigate();

    const handleChange = (e) => {
        setReservation({ ...reservation, [e.target.name]: e.target.value })
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     await axios.post('http://localhost:8080/api/reservation', reservation)
    //         .then((res) => {
    //             console.log(res.data);
    //             if (res.data.success) {
    //                 toast.success(res.data.Message);
    //             }
    //             navigation('/form')
    //             setReservation({
    //                 guestName: '',
    //                 licensePlate: '',
    //                 guestMobile: "",
    //                 startDate: "",
    //                 startTime: "",
    //                 checkoutDate: "",
    //                 checkoutTime: "",
    //                 location: "",
    //                 rate: "",
    //                 car: { carMake: "", carType: "", carColor: "" },
    //                 checkbox: ""
    //             })
    //         }).catch((err) => {
    //             console.log(err);
    //          });
    // }


    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('https://test.appristine.in/api/reservation', reservation)
            .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                    toast.success(res.data.Message);
                }
                navigation('/form')
                setReservation({
                    guestName: '',
                    licensePlate: '',
                    guestMobile: "",
                    startDate: "",
                    startTime: "",
                    checkoutDate: "",
                    checkoutTime: "",
                    location: "",
                    rate: "",
                    car: { carMake: "", carType: "", carColor: "" },
                    checkbox: ""
                })
            }).catch((err) => {
                console.log(err);
             });
    }


    const handleClick = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.get(`https://test.appristine.in/api/location-rate-list`);
            setLocation(response.data)
        } catch (error) {
            console.error('Get location rate list error:', error.response.data);
        }
    }


    return (
        <>
            <form className="w-[80%] ml-80 p-12" onSubmit={handleSubmit}>
                <div className="">
                    <div className="flex flex-col">
                        <p className="font-semibold text-2xl font-sans">Reservations</p>
                        <span className="flex justify-start items-center font-sans font-medium text-gray-300">
                            Add Reservation
                        </span>
                    </div>
                    <div className=""></div>
                </div>
                <hr className="mt-5 w-100" />
                <div className="space-y-12">
                    <div className="mt-5">
                        <span className="text-red-800 font-sans font-bold px-3 py-2 ml-4  border-b-[4px] border-red-800">
                            Guest Details
                        </span>
                        <hr className="mt-[8px]" />
                    </div>
                    <div className=" pb-5">
                        <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="first-name"
                                    className="block font-medium leading-6 text-lg text-gray-900"
                                >
                                    Guest Name <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        name="guestName"
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="CAZ5U"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="last-name"
                                    className="block text-lg font-medium leading-6 text-gray-900"
                                >
                                    License Plate <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        name="licensePlate"
                                        type="text"
                                        onChange={handleChange}
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-medium leading-6 text-gray-900"
                                >
                                    Guest Mobile <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        name="guestMobile"
                                        type="text"
                                        onChange={handleChange}
                                        placeholder="+91 1234567890"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-gray-100 w-100 h-3" />

                    <div className="w-full border-b-4 border-dotted border-gray-900/10  pb-5">
                        <h1 className="font-sans text-lg font-medium">Time & Location</h1>
                        <div className="mt-5 mx-10 bg-gray-200 p-7 grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-4">
                            <div className="sm:col-span-1">
                                <label
                                    htmlFor="first-name"
                                    className="block font-medium leading-6 text-lg text-gray-900"
                                >
                                    Start Date<span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        name="startDate"
                                        type="date"
                                        onChange={handleChange}
                                        placeholder="CAZ5U"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-1">
                                <label
                                    htmlFor="last-name"
                                    className="block text-lg font-medium leading-6 text-gray-900"
                                >
                                    Time <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="last-name"
                                        name="startTime"
                                        onChange={handleChange}
                                        type="time"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-1">
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-medium leading-6 text-gray-900"
                                >
                                    Checkout Date <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        name="checkoutDate"
                                        type="date"
                                        onChange={handleChange}
                                        placeholder="+91 1234567890"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-1">
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-medium leading-6 text-gray-900"
                                >
                                    Time <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        name="checkoutTime"
                                        type="time"
                                        onChange={handleChange}
                                        placeholder="+91 1234567890"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full border-b-8  border-gray-900/10  pb-5">
                        <div className="mt-2 p-7 grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="first-name"
                                    className="block font-medium leading-6 text-lg text-gray-900"
                                >
                                    Location <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-3">
                                    <select name="location" id="" className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onClick={handleClick}>
                                        {/* {
                                            location.map((items) =>{
                                                return (
                                                    <>
                                                      <option value={items}> Latur </option>
                                                    </>
                                                )
                                            })
                                        } */}
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="last-name"
                                    className="block text-lg font-medium leading-6 text-gray-900"
                                >
                                    Rate <span className="text-red-500">*</span>
                                </label>
                                <div className="mt-3">
                                    <select name="rate" id="" className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                        <option value="7000"> 7000 </option>
                                        <option value="8000"> 8000 </option>
                                        <option value="17000">17000 </option>
                                        <option value="18000">18000 </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full border-b-8  border-gray-100  pb-5">
                        <h1 className="font-sans text-lg font-medium">Car Details</h1>
                        <div className="mt-2 bg-gray-100  p-7 grid grid-cols-1 gap-x-1 gap-y-2 sm:grid-cols-5">
                            <div className="sm:col-span-1">
                                <button type="button" onClick={() => setCarModal(true)} class="text-green-700 flex items-center  hover:text-white border border-gray-400 hover:bg-[#1f4649] focus:ring-4  font-medium rounded-lg text-sm  px-7 py-2 text-center  mb-2 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                                    <span className=""><FaCarSide className="font-bold text-4xl p-2 bg-white rounded-full mr-2 text-[#1f4649] " /> </span>
                                    <span className="ml-2 text-lg">Car Make</span>
                                </button>
                            </div>


                            {carModal ? (
                                <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                <div className="relative px-6 py-1 pt-5 flex-auto">
                                                    <h4 className="font-semibold text-lg">Car Make</h4>
                                                    <p className="my-1 text-blueGray-500 text-lg leading-relaxed">
                                                        <input name="" id="" className="px-5 pr-7 py-1 rounded-md w-full text-gray-500 bg-slate-200 border outline-none focus:outline-none border-gray-300 " placeholder="Search car" ></input>
                                                    </p>
                                                </div>
                                                <div className="relative px-6 py-1 flex-auto">
                                                    <ul>
                                                        <li className="font-normal text-lg py-1 border-b-2 flex justify-between items-center">
                                                            <label htmlFor="">AUDI</label>
                                                            <input type="checkbox" name="" id="" className="rounded-full outline-none border-2" />
                                                        </li>
                                                        <li className="font-normal text-lg py-1 border-b-2 flex justify-between items-center">
                                                            <label htmlFor="">BMW</label>
                                                            <input type="checkbox" name="" id="" className="rounded-full outline-none border-2" />
                                                        </li>
                                                    </ul>

                                                </div>

                                                <div className="flex items-center justify-between p-6  rounded-b">
                                                    <button
                                                        className="bg-gray-300 rounded-lg background-transparent font-bold  px-8 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setCarModal(false)}
                                                    >
                                                        Cancle
                                                    </button>
                                                    <button
                                                        className="text-white bg-gradient-to-r outline-none from-cyan-800 via-cyan-900 to-cyan-600 hover:bg-gradient-to-br   font-medium rounded-lg text-sm px-8 py-3 text-center me-2 mb-2"
                                                        type="button"

                                                    >
                                                        OK
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>

                            ) : null}



                            <div className="sm:col-span-1">
                                <button type="button" onClick={() => setCarType(true)} class="text-green-700 flex items-center  hover:text-white border border-gray-400 hover:bg-[#1f4649] focus:ring-4  font-medium rounded-lg text-sm  px-7 py-2 text-center  mb-2 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                                    <span className=""><FaCarSide className="font-bold text-4xl p-2 bg-white rounded-full mr-2 text-[#1f4649] " /> </span>
                                    <span className="ml-2 text-lg">Car Type</span>
                                </button>
                            </div>

                            {carType ? (
                                <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                <div className="relative px-6 py-1 pt-5 flex-auto">
                                                    <h4 className="font-semibold text-lg">Car Make</h4>
                                                    <p className="my-1 text-blueGray-500 text-lg leading-relaxed">
                                                        <input name="" id="" className="px-5 pr-7 py-1 rounded-md w-full text-gray-500 bg-slate-200 border outline-none focus:outline-none border-gray-300 " placeholder="Search car" ></input>
                                                    </p>
                                                </div>
                                                <div className="relative px-6 py-1 flex-auto">
                                                    <ul>
                                                        <li className="font-normal text-lg py-1 border-b-2 flex justify-between items-center">
                                                            <label htmlFor="">XUV</label>
                                                            <input type="checkbox" name="" id="" className="rounded-full outline-none border-2" />
                                                        </li>
                                                        <li className="font-normal text-lg py-1 border-b-2 flex justify-between items-center">
                                                            <label htmlFor="">Three Seater</label>
                                                            <input type="checkbox" name="" id="" className="rounded-full outline-none border-2" />
                                                        </li>
                                                    </ul>

                                                </div>

                                                <div className="flex items-center justify-between p-6  rounded-b">
                                                    <button
                                                        className="bg-gray-300 rounded-lg background-transparent font-bold  px-8 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setCarType(false)}
                                                    >
                                                        Cancle
                                                    </button>
                                                    <button
                                                        className="text-white bg-gradient-to-r outline-none from-cyan-800 via-cyan-900 to-cyan-600 hover:bg-gradient-to-br   font-medium rounded-lg text-sm px-8 py-3 text-center me-2 mb-2"
                                                        type="button"

                                                    >
                                                        OK
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>

                            ) : null}


                            <div className="sm:col-span-1">
                                <button type="button" onClick={() => setCarColor(true)} class="text-green-700 flex items-center  hover:text-white border border-gray-400 hover:bg-[#1f4649] focus:ring-4  font-medium rounded-lg text-sm px-7 py-2 text-center  mb-2 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                                    <span className=""><FaCarSide className="font-bold text-4xl p-2 bg-white rounded-full mr-2 text-[#1f4649] " /> </span>
                                    <span className="ml-2 text-lg">Car Color</span>
                                </button>
                            </div>

                            {carColor ? (
                                <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                <div className="relative px-6 py-1 pt-5 flex-auto">
                                                    <h4 className="font-semibold text-lg">Car Make</h4>
                                                    <p className="my-1 text-blueGray-500 text-lg leading-relaxed">
                                                        <input name="" id="" className="px-5 pr-7 py-1 rounded-md w-full text-gray-500 bg-slate-200 border outline-none focus:outline-none border-gray-300 " placeholder="Search car" ></input>
                                                    </p>
                                                </div>
                                                <div className="relative px-6 py-1 flex-auto">
                                                    <ul>
                                                        <li className="font-normal text-lg py-1 border-b-2 flex justify-between items-center">
                                                            <label htmlFor="">AUDI</label>
                                                            <input type="checkbox" name="" id="" className="rounded-full outline-none border-2" />
                                                        </li>
                                                        <li className="font-normal text-lg py-1 border-b-2 flex justify-between items-center">
                                                            <label htmlFor="">BMW</label>
                                                            <input type="checkbox" name="" id="" className="rounded-full outline-none border-2" />
                                                        </li>
                                                    </ul>

                                                </div>

                                                <div className="flex items-center justify-between p-6  rounded-b">
                                                    <button
                                                        className="bg-gray-300 rounded-lg background-transparent font-bold  px-8 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setCarColor(false)}
                                                    >
                                                        Cancle
                                                    </button>
                                                    <button
                                                        className="text-white bg-gradient-to-r outline-none from-cyan-800 via-cyan-900 to-cyan-600 hover:bg-gradient-to-br   font-medium rounded-lg text-sm px-8 py-3 text-center me-2 mb-2"
                                                        type="button"

                                                    >
                                                        OK
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>

                            ) : null}



                        </div>
                    </div>


                    <div className="w-full  pb-5">
                        <h1 className="font-sans text-lg font-medium">Settings</h1>
                        <div className="mt-2 border border-gray-200  p-7 grid grid-cols-1 gap-x-1 gap-y-2 sm:grid-cols-12">
                            <div className="sm:col-span-6">
                                <h4 className="text-lg font-semibold font-sans">In and Out Priviliges</h4>
                                <input type="checkbox" name="" id="" className="" />
                                <label htmlFor="" className="font-normal text-gray-400 ml-2 mt-1">Allow in and Out Priviliges ?</label>
                            </div>
                            <div className="sm:col-span-6">
                                <h4 className="text-lg font-semibold font-sans">About In and Out Priviliges</h4>
                                <p className="mt-2 text-gray-500">Can a guest park multiple times during this reservation? Turning on this feature will allow the reservation to be used only multiple visits.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <button
                        className="text-white bg-gradient-to-r outline-none from-cyan-800 via-cyan-900 to-cyan-600 hover:bg-gradient-to-br   font-medium rounded-lg text-sm px-8 py-3 text-center me-2 mb-2"
                        type="submit"

                    >
                        Save
                    </button>
                    <button
                        className="outline-gray-500 border-2 border-black from-cyan-800 via-cyan-900 to-cyan-600 hover:bg-gradient-to-br   font-medium rounded-lg text-sm px-8 py-3 text-center me-2 mb-2"
                        type="button"

                    >
                        Save & add another
                    </button>
                </div>
            </form>
        </>
    );
};

export default Form;
