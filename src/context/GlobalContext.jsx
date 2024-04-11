import React, { createContext, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [job, setJob] = useState(null);

  const fetchData = () => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        console.log(res.data.data);

        setData([...res.data.data]);
      })
      .catch((e) => {
        console.log("Error Message: ", e.message);
      });
  };

  const detailJob = (event) => {
    event.preventDefault();
    let idData = parseInt(event.target.value);
    axios
      .get(
        `https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`
      )
      .then((res) => {
        setJob(res.data);
        console.log(res.data.id)
      }).catch((e) => {
        console.log(e.message)
      })
  };
  let control = {
    data,
    setData,
    fetchData,
    detailJob,
    job,
    setJob
  };

  return (
    <GlobalContext.Provider value={{ control }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
