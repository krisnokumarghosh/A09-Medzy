"use client";

import { Card } from "@heroui/react";

const error = () => {
  return (
    <div className=" my-10 md:my-25">
      <Card className="w-70 md:w-175 mx-auto  p-6 backdrop-blur-md bg-cyan-50/40 rounded-2xl border border-white/50 shadow-md">
        <h3 className="font-semibold text-[25px] md:text-[32px] text-center">
          Something Went Wrong
        </h3>
        <p className="text-[#3E4947] text-[14px] md:text-[18px] text-justify md:text-center w-50 md:w-100 mx-auto mt-3 ">
          An unexpected error occoured while loading this page. try again or
          return to the homepage.
        </p>
      </Card>
    </div>
  );
};

export default error;
