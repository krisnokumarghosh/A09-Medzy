"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { inter } from "@/lib/font";
import { Button } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineBuildingOffice, HiOutlineCalendar, HiOutlineUser } from "react-icons/hi2";
import { IoMdArrowRoundForward } from "react-icons/io";

const features = [
  {
    id: "01",
    title: "Modern Facilities",
    description: "Access top-tier clinics equipped with the latest diagnostic and treatment technologies, designed around your comfort.",
    icon: <HiOutlineBuildingOffice className="text-xl" />,
  },
  {
    id: "02",
    title: "Expert Doctors",
    description: "Our practitioners are world-class specialists with years of proven clinical excellence and patient-first philosophy.",
    icon: <HiOutlineUser className="text-xl" />,
  },
  {
    id: "03",
    title: "Easy Scheduling",
    description: "Forget wait times. Our smart booking system manages your entire health journey effortlessly, 24/7.",
    icon: <HiOutlineCalendar className="text-xl" />,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function FeatureCard({ feature, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        "group relative flex flex-col gap-4 p-7 rounded-2xl border cursor-default select-none",
        "transition-all duration-500 ease-out",
        hovered
          ? "bg-teal-600 border-teal-500 shadow-2xl shadow-teal-500/20 -translate-y-1"
          : "bg-white border-slate-100 shadow-sm hover:shadow-md",
      ].join(" ")}
    >
      {/* Number tag */}
      <span className={["absolute top-5 right-6 font-mono text-xs font-semibold tracking-widest transition-colors duration-300",
        hovered ? "text-teal-200/60" : "text-slate-200"].join(" ")}
      >
        {feature.id}
      </span>

      {/* Icon bubble */}
      <div className={["w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
        hovered ? "bg-white/20 text-white" : "bg-teal-50 text-teal-600"].join(" ")}
      >
        {feature.icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1.5">
        <h3 className={["text-base font-semibold tracking-tight transition-colors duration-300",
          hovered ? "text-white" : "text-slate-800"].join(" ")}
        >
          {feature.title}
        </h3>
        <p className={["text-sm leading-relaxed transition-colors duration-300",
          hovered ? "text-teal-100" : "text-slate-500"].join(" ")}
        >
          {feature.description}
        </p>
      </div>

      {/* Arrow indicator */}
      <div className={["mt-auto flex items-center gap-1.5 text-xs font-medium transition-all duration-300",
        hovered ? "text-white opacity-100 translate-x-0" : "text-teal-500 opacity-0 -translate-x-2"].join(" ")}
      >
        Learn more
        <FaArrowRightLong />
      </div>
    </motion.div>
  );
}

export default function WhyChooseFreshMint() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-15 md:py-24 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: heading block */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 }}
            className="flex flex-col gap-8"
          >
            {/* Pill label */}
            <div className="flex justify-center items-center gap-2 md:w-fit">
              <span className="w-6 h-px bg-teal-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600">
                Why Fresh Mint
              </span>
            </div>

            {/* Headline */}
            <h2 className={`${inter.className} text-2xl md:text-[42px] font-semibold text-slate-800 tracking-tight leading-[1.1] text-center md:text-left`}>
              Where advanced <span className="text-teal-600">technology</span>
              <br />
              meets human care.
            </h2>

            {/* Sub-copy */}
            <p className="text-[14px] md:text-base text-slate-500 leading-relaxed max-w-62.5 sm:max-w-sm mx-auto md:mx-0 mt-3 text-center md:text-left">
              We bridge the gap between cutting-edge medical innovation and a
              genuinely personal healthcare experience — because you deserve both.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 pt-2">
              {[
                ["98%", "Patient satisfaction"],
                ["200+", "Specialist doctors"],
                ["24 / 7", "Care availability"],
              ].map(([stat, label]) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-semibold text-teal-700 tracking-tight">{stat}</span>
                  <span className="text-xs text-slate-400 font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center md:justify-start pt-2">
              <Button className="group inline-flex items-center gap-2.5 bg-[#008075] hover:bg-teal-600 text-white text-sm font-semibold px-6 py-6 rounded-xl transition-all duration-200 shadow-lg shadow-teal-700/20 hover:shadow-xl hover:shadow-teal-600/25 hover:-translate-y-0.5">
                Discover More Features
                <IoMdArrowRoundForward />
              </Button>
            </div>
          </motion.div>

          {/* Right: feature cards */}
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}