import DashboardTabs from "@/components/shared/DashboardTabs";

import { getBookedData } from "@/lib/api-fetch";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const generateMetadata = () => {
  return {
    title: "Dasboard | Medzy",
  };
};

const Dashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const user = session?.user;

  const userID = user?.id;

  const bookedData = await getBookedData(userID, token);

  return (
    <div className="container mx-auto">
      <h2 className="font-semibold text-center md:text-left  text-[23px] md:text-[32px] text-[#151D1D]">
        Dashboard
      </h2>

      <div className="mt-10">
        <DashboardTabs bookedData={bookedData}></DashboardTabs>
      </div>
    </div>
  );
};

export default Dashboard;
