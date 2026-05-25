import { singleDoctorData } from "@/lib/api-fetch";
import { Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { MdVerified } from "react-icons/md";
import ratingImg from "../../../../public/images/rating.png";
import BookingModal from "@/components/shared/BookingModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const doctor = await singleDoctorData(id);
  return {
    title: ` ${doctor.name} | Medzy`,
  };
};

const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });


  const doctor = await singleDoctorData(id, token);
  return (
    <div className="container mx-auto">
      <div className=" lg:flex items-center gap-40 justify-center">
        <div>
          <Image
            alt="doctor image"
            height={256}
            width={368}
            src={doctor.image}
            className=" rounded-xl h-48 md:h-64 w-65 md:w-100 object-cover mx-auto lg:mx-0 "
          />

          <div className="hidden lg:grid mt-5 space-y-5 max-w-100 mx-auto">
            <div className="bg-[#008075] rounded-xl p-4 text-white">
              <p className="font-semibold text-[24px] ">Clinic Location</p>
              <p className="text-[#DDFFF8] text-[14px] mt-2">
                {doctor.location}
              </p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="font-semibold text-[24px] text-[#008075]">
                Clinic Hours
              </p>

              {doctor.availability.map((item, ind) => {
                return (
                  <div key={ind}>
                    {ind === 0 ? (
                      <div className="flex gap-8 mt-3">
                        <p className="text-[14px] font-semibold text-[#3E4947]">
                          Mon - Fri
                        </p>
                        <p className="text-[14px] font-bold text-[#151D1D]">
                          {item}
                        </p>
                      </div>
                    ) : (
                      <div className="flex gap-8 mt-3">
                        <p className="text-[14px] font-semibold text-[#3E4947]">
                          Saturday
                        </p>
                        <p className="text-[14px] font-bold text-[#151D1D]">
                          {item}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 text-center">
          <Chip className="text-[#006F66]  gap-1 px-4 py-1 text-[13px] bg-[#92F0E4] font-semibold">
            <MdVerified />
            Board Certified {doctor.specialty}
          </Chip>
          <h1 className="font-bold text-[25px] md:text-[45px] mt-4 md:mt-2 text-[#006F66]">
            {doctor.name}
          </h1>
          <div className="flex gap-2 items-center mt-2 justify-center">
            <Image alt="rating image" height={19} width={100} src={ratingImg} />
            <p className=" text-[11px] md:text-[14px]  font-semibold text-[#3E4947]">
              ({doctor.rating} Paitent Reviews)
            </p>
          </div>

          <h3 className="mt-3 text-[#3E4947] font-semibold">
            Fee:{" "}
            <span className="text-[18px] font-bold text-[#00655C]">
              {doctor.fee}
            </span>
          </h3>

          <div className="rounded-xl w-70 md:w-163.75 p-6 mx-auto bg-[#BDC9C6]/30 mt-6">
            <p className=" text-[18px] md:text-[24px] font-semibold text-[#151D1D]">
              About
            </p>
            <p className="mt-3 text-justify text-[13px] md:text-[16px]  text-[#3E4947]">
              {doctor.description}
            </p>
          </div>

          <div className=" w-70 md:w-163.75 mx-auto  lg:hidden mt-5 space-y-5 ">
            <div className="bg-[#008075] rounded-xl p-4 text-white">
              <p className="font-semibold text-[13px] md:text-[24px] ">
                Clinic Location
              </p>
              <p className="text-[#DDFFF8] text-[11px] md:text-[14px] mt-2">
                {doctor.location}
              </p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="font-semibold text-[13px] md:text-[24px] text-[#008075]">
                Clinic Hours
              </p>

              {doctor.availability.map((item, ind) => {
                return (
                  <div key={ind}>
                    {ind === 0 ? (
                      <div className="flex gap-8 mt-3 justify-center">
                        <p className="text-[11px] md:text-[14px] font-semibold text-[#3E4947]">
                          Mon - Fri
                        </p>
                        <p className="text-[11px] md:text-[14px] font-bold text-[#151D1D]">
                          {item}
                        </p>
                      </div>
                    ) : (
                      <div className="flex gap-8 mt-3 justify-center">
                        <p className="text-[11px] md:text-[14px] font-semibold text-[#3E4947]">
                          Saturday
                        </p>
                        <p className="text-[11px] md:text-[14px] font-bold text-[#151D1D]">
                          {item}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center">
            <BookingModal doctor={doctor}></BookingModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;
