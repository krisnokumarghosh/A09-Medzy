import { Card } from "@heroui/react";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className=" my-10 md:my-25">
      <Card className="w-70 md:w-175 mx-auto  p-6 backdrop-blur-md bg-cyan-50/40 rounded-2xl border border-white/50 shadow-md">

        <h3 className="font-semibold text-[25px] md:text-[32px] text-center">
          404 - Page <span className="text-[#008075]">Not Found</span>
        </h3>
        <p className="text-[#3E4947] text-[14px] md:text-[18px] text-justify md:text-center w-50 md:w-100 mx-auto mt-3 ">
          Oops! The page you're looking for doesn't exist or has been moved.
          Even the best systems need a check-up sometimes.
        </p>
      </Card>
    </div>
  );
};

export default NotFoundPage;
