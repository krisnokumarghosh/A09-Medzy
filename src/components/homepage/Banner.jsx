import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaCalendar } from "react-icons/fa";
import { IoShieldCheckmark, IoStarSharp } from "react-icons/io5";
import bannerImg from "../../../public/images/banner.png";
import Marquee from "react-fast-marquee";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaShieldHalved } from "react-icons/fa6";
import { BiSolidFirstAid } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import { BsFillPeopleFill } from "react-icons/bs";
import { CgDropOpacity } from "react-icons/cg";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="mb-13 md:mb-25">
      <div className="container mx-auto lg:flex items-center justify-around">
        <div className="space-y-6 text-center lg:text-left">
          <Chip className="text-[#006F66] badge-glow gap-1 px-4 py-1 text-[13px] bg-[#92F0E4] font-semibold">
            <IoShieldCheckmark /> Certified Medical Network
          </Chip>
          <h1 className=" text-[29px] md:text-[48px] font-bold text-[#151D1D]">
            Your Health, Our <br /> Priority
          </h1>
          <p className=" text-[14px] md:text-[18px] text-[#3E4947] md:w-123 w-65 mx-auto lg:mx-0">
            Experience clinical precision fused with organic warmth. Book
            appointments with top-rated doctors in minutes and start your
            journey to renewed vitality.
          </p>
          <div className="md:flex items-center justify-center lg:justify-normal gap-4">
            <Link href={"/all-appointment"}>
            <Button className="text-white flex rounded-xl gap-2 items-center bg-[#C64728]  hover:-translate-y-1 transition-all duration-400 mx-auto md:mx-0">
              Book Appointment Now <FaCalendar />
            </Button>
            </Link>
            <Button className="bg-transparent border-2 rounded-xl border-[#00655C] text-[#00655C] transition-all duration-400 hover:bg-[#00655C] hover:-translate-y-1 hover:text-white mt-5 md:mt-0">
              How it Works
            </Button>
          </div>
        </div>
        <div className="relative img-side">
          <Image
            alt="banner image"
            height={500}
            width={544}
            src={bannerImg}
            className="rounded-3xl  mt-10 w-55 md:w-136 lg:mt-0 mx-auto lg:mx-0 "
          />
          <div className="absolute bottom-2 left-17 md:left-31 lg:left-3  backdrop-blur-md bg-cyan-50/40 rounded-2xl border border-white/50 shadow-md p-2 md:p-6 max-w-45 ">
            <h3 className="font-bold text-[12px] md:text-[24px] text-[#00655C]">4.9/5</h3>
            <div className="flex text-xs md:text-lg items-center gap-1 text-[#A42F11]">
              <IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp />
            </div>
            <p className="text-[8px] md:text-[12px] text-[#3E4947] font-semibold">Average Patient Rating</p>
          </div>
        </div>
      </div>
      <div className="bg-[#00655C] p-4 md:p-6 mt-10">
        <Marquee>
          <div className="flex items-center gap-20 text-white text-[14px] md:text-[16px]">
            <p className="flex items-center gap-2 ml-20 lg:ml-0">
              <BsFillPeopleFill />
              Trusted by 50,000+ paitent
            </p>
            <p className="flex items-center gap-2">
              <MdOutlineSupportAgent className="text-xl" /> 24/7 Priority
              Support
            </p>
            <p className="flex items-center gap-2">
              <BiSolidFirstAid className="text-lg" />
              Specialist Doctors available now
            </p>
            <p className="flex items-center gap-2">
              <FaShieldHalved className="text-lg" />
              100% Secure Data Protection
            </p>
            <p className="flex items-center gap-2 ">
              <GrTechnology className="text-lg" />
              Optimized Booking System
            </p>
            <p className="flex items-center gap-2">
              <CgDropOpacity />
              Hassel Free Bookings
            </p>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Banner;
