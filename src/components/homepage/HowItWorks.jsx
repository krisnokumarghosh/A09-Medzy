"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { inter } from "@/lib/font";
import { IoIosSearch, IoMdArrowRoundForward } from "react-icons/io";
import { HiOutlineCalendar, HiOutlineVideoCamera } from "react-icons/hi2";
import { Button } from "@heroui/react";

const steps = [
  {
    id: "01",
    step: "Search",
    description:
      "Find the right specialist by searching through our curated database of verified healthcare professionals.",
    icon: <IoIosSearch className="text-2xl"/>,
  },
  {
    id: "02",
    step: "Book",
    description:
      "Choose a time that works for you. Our real-time scheduling system ensures instant confirmation of your slot.",
    icon:<HiOutlineCalendar className="text-2xl" />,
  },
  {
    id: "03",
    step: "Meet",
    description:
      "Connect with your doctor via high-quality video call or visit them at their clinic for a personal session.",
    icon:<HiOutlineVideoCamera className="text-2xl" />,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function StepCard({ step, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.13 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        " flex flex-col lg:w-100 items-start gap-5 p-8 rounded-2xl",
        "border transition-all duration-500 ease-out cursor-default",
        hovered
          ? "bg-teal-700 border-teal-600 shadow-2xl shadow-teal-700/25 -translate-y-2"
          : "bg-white border-slate-100 shadow-sm",
      ].join(" ")}
    >
      {/* Step number */}
      <span className={[" top-6 right-7 font-mono text-xs font-bold tracking-widest transition-colors duration-300",
        hovered ? "text-teal-300/50" : "text-slate-100"].join(" ")}
      >
        {step.id}
      </span>

      {/* Icon */}
      <div className={["w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300",
        hovered ? "bg-white/15 text-white" : "bg-teal-50 text-teal-600"].join(" ")}
      >
        {step.icon}
      </div>

      {/* Title */}
      <h3 className={[`${inter.className} text-xl font-semibold tracking-tight transition-colors duration-300`,
        hovered ? "text-white" : "text-slate-800"].join(" ")}
      >
        {step.step}
      </h3>

      {/* Divider */}
      <div className={["h-px transition-all duration-300",
        hovered ? "bg-teal-400/50 w-14" : "bg-slate-100 w-10"].join(" ")}
      />

      {/* Description */}
      <p className={["text-sm leading-relaxed transition-colors duration-300",
        hovered ? "text-teal-100" : "text-slate-500"].join(" ")}
      >
        {step.description}
      </p>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section className="relative bg-slate-50 overflow-hidden">
      <div className="relative z-10  lg:container mx-auto px-6 py-15 md:py-24 lg:px-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-16">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className={`${inter.className} text-2xl md:text-[42px] font-semibold text-slate-800 tracking-tight leading-[1.1] text-center`}
          >
            How It <span className="text-teal-600">Works</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[14px] md:text-base text-slate-500 leading-relaxed max-w-62.5 sm:max-w-sm mx-auto mt-3 text-center"
          >
            Get the care you need in three simple steps. Our platform is
            designed to be effortless and intuitive.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div className="grid lg:grid-cols-3 lg:justify-items-center gap-5">
          {steps.map((step, i) => (
            <StepCard key={step.id} step={step} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-14"
        >
          <Button className="group inline-flex items-center gap-2.5 bg-teal-700 hover:bg-teal-600 text-white text-sm font-semibold px-7 py-6 rounded-xl shadow-lg shadow-teal-700/20 hover:shadow-xl hover:shadow-teal-600/25 transition-all duration-200 hover:-translate-y-0.5">
            Get Started Today
            <IoMdArrowRoundForward />
          </Button>
        </motion.div>

      </div>
    </section>
  );
}