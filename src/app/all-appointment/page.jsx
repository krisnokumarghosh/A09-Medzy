'use client'

import DoctorCard from "@/components/shared/DoctorCard";
import { allDoctors } from "@/lib/api-fetch";
import { Label, SearchField } from "@heroui/react";
import React, { useEffect, useState } from "react";

const AllAppointmentPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDoctorsData = async () => {
      const data = await allDoctors();
      setTimeout(() => {
        setDoctors(data);
        setLoading(false);
      }, 500);
    };
    getDoctorsData();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="font-semibold text-center text-[23px] md:text-[32px] text-[#151D1D]">
        Available Specialists
      </h2>
      <div className="mt-5 flex justify-center">
        <input
          type="text"
          className=" p-3 md:p-4 border-2 border-[#92F0E4] bg-white rounded-xl  md:w-md  focus:outline-none"
          placeholder="Search Doctors..."
        />
      </div>
      {
        
      }
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-20 space-y-10">
        {
          doctors.map(doctor => {
            return(
              <DoctorCard key={doctor._id} doctor={doctor}>
              </DoctorCard>
            )
          })
        }
      </div>
    </div>
  );
};

export default AllAppointmentPage;
