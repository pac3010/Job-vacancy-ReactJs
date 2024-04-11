import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Salary from "../function/salary"
import axios from "axios";
import DetailJob from "./detailJob";

const CardList = () => {
  const { control } = useContext(GlobalContext);
  let { data, fetchData, detailJob } = control;


  useEffect(() => {
      fetchData();
  }, []);

  return (
    (
      <div>
        {data !== null &&
          data.map((res, index) => (
            <div key={index} className="max-w-s mb-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                src={res.company_image_url !== null ? res.company_image_url : "https://suesys.com/assets/website/images/company-logo-default.png"}
                alt="Image description"
                className="w-16 h-16 rounded-full mr-4"
              />
              <a href="#">
                <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {res.title !== null ? res.title : "Undefined Job"}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {res.company_name !== null ? res.company_name : "Confidential Company"}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {res.company_city !== null ? res.company_city : "Unknown Location"}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <Salary salary1={res.salary_min} salary2={res.salary_max} />
              </p>
              <button
              onClick={detailJob}
              value={res.id}
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Detail
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
              </button>
            </div>
          ))}
      </div>

  ))
};

export default CardList;
