import Banner from "@/components/homepage/Banner";
import Choose from "@/components/homepage/Choose";
import RatedDoctors from "@/components/homepage/RatedDoctors";
import Work from "@/components/homepage/Work";

export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <RatedDoctors></RatedDoctors>
     <Work></Work>
     <Choose></Choose>
    </div>
  );
}
