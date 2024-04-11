import React from "react";
import CardList from "../components/cardList";
import DetailJob from "../components/detailJob";
import FilterBar from "../components/filterBar";

const Vacancy = () => {
  return (
    <>
    <FilterBar />
    <div className="flex flex-container h-screen p-2">
      
      <div className="w-full md:w-1/3 bg-blue-500 p-5 overflow-y-auto">
        <CardList />
        
      </div>
      <div className="hidden md:block w-2/3 bg-red-500 p-5 overflow-y-auto">
        <DetailJob />
      </div>
    </div>
    </>
  );
};

export default Vacancy;
