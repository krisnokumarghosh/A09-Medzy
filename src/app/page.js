import Banner from "@/components/homepage/Banner";
import Choose from "@/components/homepage/Choose";
import HowItWorks from "@/components/homepage/HowItWorks";
import RatedDoctors from "@/components/homepage/RatedDoctors";
import WhyChooseFreshMint from "@/components/homepage/WhyChooseFreshMint";
import Work from "@/components/homepage/Work";

export const generateMetadata = () => {
  return {
    title: "Home | Medzy",
  };
};

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <RatedDoctors></RatedDoctors>
      <HowItWorks></HowItWorks>
      {/* <Work></Work> */}
      {/* <Choose></Choose> */}
      <WhyChooseFreshMint></WhyChooseFreshMint>
    </div>
  );
}
