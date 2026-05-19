import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <div className="bg-[#ECF5F4] py-4 px-16 flex items-center justify-between mb-25">
      <div>
        <Link href={"/"}>
          <h1 className="text-[#00655C] font-bold text-[24px]">Medzy</h1>
        </Link>
      </div>

      <div>
        <ul className="flex gap-6 items-center text-[#3E4947]">
          <li>
            <Navlink className="py-2" href={"/"}>Home</Navlink>
          </li>
          <li ><Navlink className="py-2" href={"/all-appointment"}>All-Appointment</Navlink></li>
          <li><Navlink className="py-2" href={"/dashboard"}>Dashboard</Navlink></li>
        </ul>
      </div>

      <div className="flex gap-3 ">
        <Button className="bg-[#00655C] ">Login</Button>
        <Button className="bg-[#00655C]">Register</Button>
      </div>
    </div>
  );
};

export default Navbar;
