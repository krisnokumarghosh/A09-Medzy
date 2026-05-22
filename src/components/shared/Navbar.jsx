"use client";

import { Button, Spinner, Drawer } from "@heroui/react";
import Link from "next/link";
import { Briefcase, FolderOpenFill, HouseFill } from "@gravity-ui/icons";
import Navlink from "./Navlink";
import { FaBars } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { successToast } from "@/lib/toasts";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();

    successToast("Logout Successfull");
  };

  return (
    <div className="bg-[#ECF5F4] py-4 px-3 md:px-16 flex items-center justify-between mb-13 md:mb-25">
      <div className="flex items-center ">
        <div className="lg:hidden ">
          <Drawer>
            <Button className="bg-transparent text-[#00655C]">
              <FaBars />
            </Button>
            <Drawer.Backdrop>
              <Drawer.Content placement="left">
                <Drawer.Dialog>
                  <Drawer.CloseTrigger />
                  <Drawer.Header>
                    <Drawer.Heading>Pages</Drawer.Heading>
                  </Drawer.Header>
                  <Drawer.Body>
                    <nav className="flex flex-col gap-6">
                      <li>
                        <Navlink
                          className="py-2 flex items-center gap-2"
                          href={"/"}
                        >
                          <HouseFill></HouseFill>Home
                        </Navlink>
                      </li>
                      <li>
                        <Navlink
                          className="py-2 flex items-center gap-2"
                          href={"/all-appointment"}
                        >
                          <FolderOpenFill /> All-Appointment
                        </Navlink>
                      </li>
                      <li>
                        <Navlink
                          className="py-2 flex items-center gap-2"
                          href={"/dashboard"}
                        >
                          <Briefcase /> Dashboard
                        </Navlink>
                      </li>
                      <li>
                        {user && (
                          <Button
                            onClick={handleSignOut}
                            className="rounded-full w-full bg-[#A42F11] text-white"
                          >
                            Logout
                          </Button>
                        )}
                      </li>
                    </nav>
                  </Drawer.Body>
                </Drawer.Dialog>
              </Drawer.Content>
            </Drawer.Backdrop>
          </Drawer>
        </div>
        <Link href={"/"} className="flex gap-3">
          <div className="bg-[#00655C] rounded-lg p-2">
            <FaHeartPulse className="text-white text-xl" />
          </div>
          <h1 className="text-[#00655C] font-bold text-[24px]">Medzy</h1>
        </Link>
      </div>
      <div>
        <ul className="hidden lg:flex gap-6 items-center text-[#3E4947] backdrop-blur-sm bg-cyan-50/40 rounded-full border border-white/50 shadow-md px-7 py-3">
          <li>
            <Navlink className="py-2" href={"/"}>
              Home
            </Navlink>
          </li>
          <li>
            <Navlink className="py-2" href={"/all-appointment"}>
              All-Appointment
            </Navlink>
          </li>
          <li>
            <Navlink className="py-2" href={"/dashboard"}>
              Dashboard
            </Navlink>
          </li>
        </ul>
      </div>

      <div>
        {isPending ? (
          <div>
            <Spinner className="text-[#008075]" size="md" />
          </div>
        ) : user ? (
          <div className="flex items-center gap-4">
            <div className=" p-1.25 rounded-full bg-[#008075]">
              <Image
                alt="user image"
                height={35}
                width={35}
                src={user?.image}
              />
            </div>
            <Button
              onClick={handleSignOut}
              className="rounded-full hidden md:flex bg-[#A42F11] text-white"
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-6 ">
            <Link href={"/login"} className="hidden md:flex">
              <p className="bg-transparent text-[#00655C] text-[16px] font-semibold">
                Login
              </p>
            </Link>
            <Link href={"/login"} className="md:hidden">
              <Button className="bg-[#00655C] rounded-full">Login</Button>
            </Link>
            <Link href={"/register"}>
              <Button className="bg-[#00655C] rounded-full hidden md:flex">
                Register
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
