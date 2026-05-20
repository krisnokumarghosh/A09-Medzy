import Banner from "@/components/homepage/Banner";
import RatedDoctors from "@/components/homepage/RatedDoctors";
import Work from "@/components/homepage/Work";

export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <RatedDoctors></RatedDoctors>
     <Work></Work>
    </div>
  );
}
