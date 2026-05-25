import DoctorCard from "@/components/shared/DoctorCard";
import DoctorsWithSearch from "@/components/shared/DoctorsWithSearch";
import { allDoctors } from "@/lib/api-fetch";
import { SearchField } from "@heroui/react";


export const generateMetadata = () => {
  return {
    title: "All-Appointment | Medzy",
    
  };
};

const AllAppointmentPage = async () => {
  const data = await allDoctors();

  return (
    <div className="container mx-auto">
      <h2 className="font-semibold text-center text-[23px] md:text-[32px] text-[#151D1D]">
        Available Specialists
      </h2>
      <DoctorsWithSearch data={data}></DoctorsWithSearch>
    </div>
  );
};

export default AllAppointmentPage;
