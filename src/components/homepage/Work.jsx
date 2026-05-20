import { Card } from "@heroui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { MdOutlineVideoChat } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const Work = () => {
  return (
    <div className=" mb-13 md:mb-25 bg-[#ECF5F4] py-10 md:py-16">
      <h2 className="font-semibold text-center text-[23px] md:text-[32px] text-[#151D1D]">
        How It Works
      </h2>
      <p className="text-[#3E4947] text-[14px] md:text-[16px] w-70 md:w-100 mx-auto  mt-2 text-center">
        Get the care you need in three simple steps. Our platform is designed to
        be effortless and intuitive.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-13 container mx-auto">
        <Card className="rounded-xl p-10 space-y-3 w-65 md:w-92 hover:-translate-y-2 transition-all duration-400">
          <div className="p-5 rounded-full bg-[#93F4E6] text-[#00655C]  mx-auto">
            <FaSearch />
          </div>
          <h4 className="text-[#151D1D] font-semibold text-[24px] text-center">
            1. Search
          </h4>
          <p className="text-[#3E4947] md:w-69.5 mx-auto text-center">
            Find the right specialist by searching through our curated database
            of verified healthcare professionals.
          </p>
        </Card>
        <Card className="rounded-xl p-10 space-y-3 w-65 md:w-92 hover:-translate-y-2 transition-all duration-400">
          <div className="p-5 rounded-full bg-[#93F4E6] text-[#00655C]  mx-auto ">
            <FaCalendarDays />
          </div>
          <h4 className="text-[#151D1D] font-semibold text-[24px] text-center">
            2. Book
          </h4>
          <p className="text-[#3E4947] md:w-69.5 mx-auto text-center">
            Choose a time that works for you. Our real-time scheduling system
            ensures instant confirmation of your slot.
          </p>
        </Card>
        <Card className="rounded-xl p-10 space-y-3 w-65 md:w-92 hover:-translate-y-2 transition-all duration-400">
          <div className="p-5 rounded-full bg-[#93F4E6] text-[#00655C]  mx-auto text-xl">
            <MdOutlineVideoChat />
          </div>
          <h4 className="text-[#151D1D] font-semibold text-[24px] text-center">
            3. Meet
          </h4>
          <p className="text-[#3E4947] md:w-69.5 mx-auto text-center">
            Connect with your doctor via high- quality video call or visit them
            at their clinic for a personal session.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Work;
