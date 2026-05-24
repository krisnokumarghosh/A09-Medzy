import { Button, Card, Chip } from "@heroui/react";

import Image from "next/image";
import React from "react";
import UpdateBookingModal from "./UpdateBookingModal";
import BookingDeleteAlert from "./BookingDeleteAlert";

const MyBookings = ({ bookedData }) => {
  return (
    <div className="space-y-8">
      {bookedData.map((data) => {
        return (
          <Card
            key={data._id}
            className="w-70 md:w-175 mx-auto md:mx-0 p-6 border-[#00655C] border-l-3 rounded-lg"
          >
            <div className=" md:flex items-center justify-between">
              <div className=" md:flex items-center gap-4">
                <Image
                  alt="doctor image"
                  height={64}
                  width={64}
                  src={data.doctorImage}
                  className="w-16 h-16 mx-auto md:mx-0 object-cover rounded-full"
                />

                <div className="space-y-2 text-center md:text-left">
                  <p className="text-[#151D1D] font-semibold ">
                    {data.doctorName}
                  </p>
                  <div className=" md:flex items-center gap-4">
                    <Chip className="bg-[#00655C] text-white">
                      {data.docotrSpecialty}
                    </Chip>
                    <p className="text-[14px] mt-2 md:mt-0 font-medium text-[#3E4947]">
                      Fee:{" "}
                      <span className="font-semibold text-[16px] text-[#00655C]">
                        {data.docorFee}
                      </span>{" "}
                    </p>
                  </div>
                  <p className="text-[14px] text-[#3E4947] font-medium">
                    Reason: {data.appointmentReason}
                  </p>
                  <p className="text-[14px] text-[#3E4947] font-medium">
                    Paitent: {data.paitentName}
                  </p>
                  <p className="text-[14px] text-[#3E4947] font-medium">
                    Phone: {data.paitentPhone}
                  </p>
                  <p className="text-[14px] text-[#3E4947] font-medium">
                    Date: {data.appointmentDate}
                  </p>
                </div>
              </div>

              <div className="flex md:flex-col justify-center md:justify-items-normal gap-3 mt-4 md:mt-0">
                <UpdateBookingModal data={data}></UpdateBookingModal>
                <BookingDeleteAlert data={data}></BookingDeleteAlert>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default MyBookings;
