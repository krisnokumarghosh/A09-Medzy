import { ratedDoctorsData } from "@/lib/api-fetch";
import AnimatedRatedDoctorSection from "./AnimatedRatedDoctorSection";

const RatedDoctors = async () => {
  const ratedDoctors = await ratedDoctorsData();

  return (
    <div >
      <AnimatedRatedDoctorSection ratedDoctors={ratedDoctors}/>
    </div>
  );
};

export default RatedDoctors;
