import React, { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
const Table = () => {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

        // const fetchData = async (page) => {
        //     const response = await axios.get("http://localhost:8080/api/all-reservation" ,{ params: {
        //         page: page,
        //         limit: 6, 
        //     } // Number of items per page
        //     });
        //     console.log(response.data);
        //     if (response.data.status) {
        //         toast.error(response.data.Massage);
        //     }
        //     setData(response.data.reservationData);
        //     setTotalPages(data.length / 6); 
        //     setCurrentPage(page);
        // };

        const fetchData = async (page) => {
            const response = await axios.get("https://test.appristine.in/api/all-reservation" ,{ params: {
                page: page,
                limit: 6, 
            } // Number of items per page
            });
            console.log(response.data);
            if (response.data.status) {
                toast.error(response.data.Massage);
            }
            setData(response.data.reservationData);
            setTotalPages(data.length / 6); 
            setCurrentPage(page);
        };

    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-300">
                    <thead className=" font-semibold font-sans text-md text-gray-700 bg-sky-50 dark:bg-sky-700 dark:text-gray-400 border border-b-2 ">
                        <tr>
                            <th scope="col" className="px-6 py-5">
                                Details
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Start
                            </th>
                            <th scope="col" className="px-6 py-5">
                                End
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Current Status
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Tickets
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Room Number
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Ext. Billing
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((items) => {
                                return (
                                    <>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium font-sans text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {items.guestName}
                                            </th>
                                            <td className="px-6 py-4">
                                                <span className="text-lg">{items.startDate}</span> <span className="text-xs text-end">{items.startTime}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                            <span className="text-lg">{items.checkoutDate}</span> <span className="text-xs text-end">{items.checkoutTime}</span>
                                            </td>
                                            <td className="px-6 py-4">{items.currentStatus}</td>
                                            <td className="px-6 py-4">{items.tickets}</td>
                                            <td className="px-6 py-4">
                                                {items.room === 0 ? items.room : <input type="text" name="" id="" className="w-16 h-6" />}
                                               

                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="p-2 px-5 bg-green-200 w-[70%] font-medium text-md rounded-md text-green-500">
                                                    Paid
                                                </p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button className="bg-red-200 rounded-md p-2">
                                                    <BiEditAlt className=" text-red-500 font-light text-xl" />
                                                </button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }

                    </tbody>
                </table>
                <div className=" mt-4 flex justify-between items-center">
                    <div className="">
                        <p className="font-sans font-medium text-gray-300">
                            Showing Data {currentPage} To {totalPages} of {data.length} entrise
                        </p>
                    </div>
                    <div className="">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex -space-x-px gap-2 text-sm">
                                <li>
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className=" rounded-md flex items-center justify-center px-3 h-8 ms-0 leading-tight  text-gray-500  bg-white border  border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        <FaChevronLeft />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handlePageChange(1)}
                                        disabled={currentPage === totalPages}
                                        className=" rounded-md flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handlePageChange(2)}
                                        disabled={currentPage === totalPages}
                                        className=" rounded-md flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handlePageChange(3)}
                                        disabled={currentPage === totalPages}
                                        className=" rounded-md flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handlePageChange(4)}
                                        disabled={currentPage === totalPages}
                                        className=" rounded-md flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                       4
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className=" rounded-md flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        <FaChevronRight />
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Table;
