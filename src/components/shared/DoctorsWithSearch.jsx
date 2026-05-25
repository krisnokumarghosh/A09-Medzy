"use client";

import { Input } from "@heroui/react";
import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import { FaSearch } from "react-icons/fa";

const DoctorsWithSearch = ({ data }) => {
  const [doctorData, setDoctorData] = useState(data);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchData = e.target.search.value;

    const filteredData = doctorData.filter((item) =>
      item.name.toLowerCase().includes(searchData.toLowerCase()),
    );

    setDoctorData(filteredData);
  };

  return (
    <div>
      <form
        onSubmit={handleSearch}
        className="max-w-120 px-5 md:px-0 mb-7  md:mb-20 mx-auto mt-6"
      >
        <div className="flex px-5 md:px-0  justify-center relative  ">
          <Input
            name="search"
            aria-label="text"
            className=" py-4 md:py-6 border-2 border-[#00655c]  rounded-xl  w-full px-10 focus:ring-[#00655c] shadow-none"
            placeholder="Search doctors by name"
          />
          <button className="absolute top-5 md:top-6 right-10 cursor-pointer">
            <FaSearch className="text-[#00655c]"></FaSearch>
          </button>
        </div>
      </form>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-20 ">
        {doctorData.map((doctor) => {
          return <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>;
        })}
      </div>
    </div>
  );
};

export default DoctorsWithSearch;
