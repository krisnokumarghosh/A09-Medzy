import Image from "next/image";
import React from "react";
import ImgOne from "../../../public/images/Designer (2).png";
import ImgTwo from "../../../public/images/Designer (3).png";
import ImgThree from "../../../public/images/Designer (4).png";
import { GoCheckCircleFill } from "react-icons/go";
import { Button } from "@heroui/react";

const Choose = () => {
  return (
    <div className="container mx-auto grid lg:grid-cols-2 justify-items-center py-8 md:py-16">
      <div>
        <div className="flex justify-center gap-3">
          <Image
            alt="section image"
            height={192}
            width={260}
            src={ImgOne}
            className="rounded-xl w-30 md:w-65"
          />
          <Image
            alt="section image"
            height={192}
            width={260}
            src={ImgTwo}
            className="rounded-xl w-30 md:w-65"
          />
        </div>
        <Image
          alt="section image"
          height={256}
          width={544}
          src={ImgThree}
          className="rounded-xl  mt-4 w-65 md:w-136"
        />
      </div>
      <div className="mt-10 lg:mt-0">
        <h2 className="font-semibold text-center lg:text-left text-[23px] md:text-[32px] text-[#151D1D]">
          Why Choose <span className="text-[#00655C] font-bold">Medzy</span>
        </h2>
        <p className="text-[#3E4947] text-[14px] md:text-[16px] w-70 md:w-115 mx-auto lg:mx-0 mt-2 text-center lg:text-left">
          We bridge the gap between advanced medical technology and human-
          centric care.
        </p>

        <div className="mt-10 space-y-8">
          <div>
            <div className="flex gap-4 items-center justify-center lg:justify-normal">
              <GoCheckCircleFill className="text-[#00655C]" />
              <p className="text-[20px] text-[#151D1D]">Modern Facilities</p>
            </div>
            <p className="text-[#3E4947]  md:text-[16px] w-70 md:w-115 mx-auto lg:mx-0 mt-2 text-center  lg:text-left ml-0 lg:ml-7">
              Access top-tier clinics equipped with the latest diagnostic and
              treatment technologies.
            </p>
          </div>
          <div>
            <div className="flex gap-4 items-center justify-center lg:justify-normal">
              <GoCheckCircleFill className="text-[#00655C]" />
              <p className="text-[20px] text-[#151D1D]">Expert Doctors</p>
            </div>
            <p className="text-[#3E4947]  md:text-[16px] w-70 md:w-115 mx-auto lg:mx-0 mt-2 text-center lg:text-left ml-0 lg:ml-7">
              Our practitioners are world-class specialists with years of proven
              clinical excellence.
            </p>
          </div>
          <div>
            <div className="flex gap-4 items-center justify-center lg:justify-normal">
              <GoCheckCircleFill className="text-[#00655C]" />
              <p className="text-[20px] text-[#151D1D]">Easy Scheduling</p>
            </div>
            <p className="text-[#3E4947]  md:text-[16px] w-70 md:w-115 mx-auto lg:mx-0 mt-2 text-center lg:text-left ml-0 lg:ml-7">
              Forget wait times. Our smart booking system manages your health
              journey effortlessly.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-normal">
          <Button className="bg-[#00655C] mt-7 text-white rounded-xl  lg:w-full">
            Discover More Features
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Choose;
