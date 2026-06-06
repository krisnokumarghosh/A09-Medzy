import { CircleFill } from "@gravity-ui/icons";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoStarSharp } from "react-icons/io5";

const DoctorCard = ({ doctor }) => {
  return (
    <Card className="p-0 w-72 md:w-92 pb-5 shadow-none hover:shadow-2xl hover:shadow-teal-700/25 hover:-translate-y-2 transition-all duration-500 ease-out md:mt-5 lg:mt-8 mx-auto md:mx-0 ">
      <Image
        alt="doctor image"
        height={256}
        width={368}
        src={doctor.image}
        className="rounded-xl hover:scale-103 transition-all duration-500 rounded-b-none h-48 md:h-64 w-full md:w-92 object-cover "
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

         <Chip className="mt-3 bg-[#006A62]">
        <CircleFill width={6} className="text-white"/>
        <Chip.Label className="text-white">{doctor.experience} Experience</Chip.Label>
      </Chip>

        <p className="text-[12px] md:text-[14px] mt-2 text-[#00655C]">
          {doctor.specialty}
        </p>

        <Link href={`/all-appointment/${doctor._id}`}>
          <Button className="text-[#00655C] hover:bg-[#00655C] hover:text-white transition-all duration-300 bg-[#E7F0EF] w-full mt-5 text-[12px] md:text-[14px]">
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default DoctorCard;
