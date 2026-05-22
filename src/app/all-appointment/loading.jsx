import { Spinner } from "@heroui/react";
import React from "react";

const loading = () => {
  return (
    <div className=" flex justify-center my-40 ">
      <Spinner className="text-[#008075] hidden md:flex" size="xl" />
      <Spinner className="text-[#008075] md:hidden" size="md" />
    </div>
  );
};

export default loading;
