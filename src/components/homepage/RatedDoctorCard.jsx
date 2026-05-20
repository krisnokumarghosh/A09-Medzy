import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { IoStarSharp } from "react-icons/io5";

const RatedDoctorCard = ({ doctor }) => {
  return (
    <Card className="p-0 w-65 md:w-92 pb-5 hover:scale-102 transition-all duration-500">
      <Image
        alt="doctor image"
        height={256}
        width={368}
        src={doctor.image}
        className="rounded-xl hover:scale-103 transition-all duration-500 rounded-b-none h-48 md:h-64 w-full md:w-92 object-cover"
      />

      <div className="px-5">
        <div className=" flex justify-between">
          <h3 className="text-[14px] md:text-[24px] font-semibold text-[#151D1D]">
            {doctor.name}
          </h3>
          <Chip className="text-[#006A62] font-semibold bg-[#92F0E4]/30 rounded-md flex items-center gap-1">
            <IoStarSharp />
            {doctor.rating}
          </Chip>
        </div>

        <p className="text-[12px] md:text-[14px] mt-2 text-[#00655C]">{doctor.specialty}</p>

        <Button className="text-[#00655C] hover:bg-[#00655C] hover:text-white transition-all duration-300 bg-[#E7F0EF] w-full mt-5 text-[12px] md:text-[14px]">View Details</Button>
      </div>
    </Card>
  );
};

export default RatedDoctorCard;
