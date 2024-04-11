import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const DetailJob = () => {
const { control } = useContext(GlobalContext);
let { job } = control;


    return (
        (<div>
            {job && (
                <div className="max-w-4xl mx-auto my-8">
            <div className="max-w-s bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img
                    src={job.company_image_url}
                    alt="Job Image"
                    className="w-[150px] mr-4 ml-6 mt-5"
                />
                <div className="p-6">
                    <a href="#">
                        <h5 className="mb-1 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {job.title}
                        </h5>
                    </a>
                    <p className="mb-10 text-[22.5px] font-normal text-gray-700 dark:text-gray-400">
                        {job.company_name}
                    </p>
                    <p className="text-[22.5px] font-normal text-gray-700 dark:text-gray-400">
                        {job.company_city}
                    </p>
                    <p className="mb-3 text-[22.5px] font-normal text-gray-700 dark:text-gray-400">
                        {job.job_status === 0 ? "Status: Tidak Aktif" : "Status: Aktif"}
                    </p>
                    <p className="mt-10 mb-3 text-[22.5px] font-normal text-gray-700 dark:text-gray-400">
                        <p className="mb-2">Job Description:</p>
                        {job.job_description}
                    </p>
                    <p className="mt-10 mb-3 text-[22.5px] font-normal text-gray-700 dark:text-gray-400">
                        <p className="mb-2">Qualification:</p>
                        {job.job_qualification}
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Apply Now
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
            )}
        
        </div>)
        
    )
}

export default DetailJob