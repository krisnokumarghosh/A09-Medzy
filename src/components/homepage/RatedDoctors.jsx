import { ratedDoctorsData } from "@/lib/api-fetch";
import React from "react";
import RatedDoctorCard from "./RatedDoctorCard";

const RatedDoctors = async () => {
  const ratedDoctors = await ratedDoctorsData();
  console.log(ratedDoctors);

  return (
    <div className="container mx-auto mb-25">
      <h2 className="font-semibold text-center text-[23px] md:text-[32px] text-[#151D1D]">
        Top Rated Doctors
      </h2>
      <p className="text-[#3E4947] text-[14px] md:text-[16px] w-50 md:w-80 mx-auto  mt-2 text-center">
        Connect with industry-leading healthcare specialists.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 mt-10">
        {ratedDoctors.map((doctor) => {
          return <RatedDoctorCard key={doctor._id} doctor={doctor}></RatedDoctorCard>;
        })}
      </div>
    </div>
  );
};

export default RatedDoctors;
