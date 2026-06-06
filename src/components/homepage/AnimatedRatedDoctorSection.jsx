"use client";

import { motion } from "framer-motion";
import DoctorCard from "../shared/DoctorCard";
import { inter } from "@/lib/font";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const AnimatedRatedDoctorSection = ({ ratedDoctors }) => {
  return (
    <div className="container mx-auto mb-13 md:mb-25">

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0 }}
        className={`${inter.className} text-2xl md:text-[42px] font-semibold text-slate-800 tracking-tight leading-[1.1] text-center`}
      >
        Top Rated <span className="text-teal-600">Doctors</span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-[14px] md:text-base text-slate-500 leading-relaxed max-w-62.5 sm:max-w-sm mx-auto mt-3 text-center"
      >
        Connect with industry-leading healthcare specialists.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 mt-10">
        {ratedDoctors.map((doctor, index) => (
          <motion.div
            key={doctor._id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <DoctorCard doctor={doctor} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedRatedDoctorSection;