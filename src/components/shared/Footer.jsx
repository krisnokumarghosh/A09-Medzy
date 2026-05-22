import Link from "next/link";
import React from "react";
import { FaFacebook, FaStethoscope } from "react-icons/fa";
import { FaHeartPulse, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className=" mt-13 md:mt-25">
      <footer className="text-white py-12 px-6 bg-[#00655C]">
        <div className="container mx-auto grid md:justify-items-center grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-white rounded-lg p-2">
                <FaHeartPulse className="text-[#00655C] text-xl" />
              </div>
              <span className="text-xl font-medium">Medzy</span>
            </div>
            <p className="text-sm text-[#9FE1CB] max-w-55 leading-relaxed">
              Your health, our priority. Book appointments with top-rated
              doctors in minutes.
            </p>
            <div className="flex gap-3 mt-5">
              <Link
              href={"/"}
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/15 transition"
              >
                <FaFacebook />
              </Link>
              <Link
              href={"/"}
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/15 transition"
              >
                <RiInstagramFill />
              </Link>
              <Link
              href={"/"}
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/15 transition"
              >
                <FaXTwitter />
              </Link>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#9FE1CB] mb-4">
              Quick links
            </p>
            <p className="block text-sm text-[#cde8e3] hover:text-white mb-2">
              Home
            </p>
            <p className="block text-sm text-[#cde8e3] hover:text-white mb-2">
              All Doctors
            </p>
            <p className="block text-sm text-[#cde8e3] hover:text-white mb-2">
              Book Appointment
            </p>
            <p className="block text-sm text-[#cde8e3] hover:text-white mb-2">
              About Us
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#9FE1CB] mb-4">
              Contact
            </p>
            <p className="text-sm text-[#cde8e3] mb-2">info@medzy.com</p>
            <p className="text-sm text-[#cde8e3] mb-2">+880 1700-000000</p>
            <p className="text-sm text-[#cde8e3]">Dhaka, Bangladesh</p>
          </div>
        </div>

        <hr className="border-white/15 my-8 container mx-auto" />

        <div className="max-w-5xl mx-auto flex justify-between text-xs text-[#9FE1CB]">
          <span>© 2025 Medzy. All rights reserved.</span>
          <div className="flex gap-4">
            <p className="hover:text-white">Privacy policy</p>
            <p className="hover:text-white">Terms of use</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
