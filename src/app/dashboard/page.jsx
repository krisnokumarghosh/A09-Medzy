
import MyBookings from "@/components/shared/MyBookings";
import { Tabs } from "@heroui/react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <h2 className="font-semibold text-center md:text-left  text-[23px] md:text-[32px] text-[#151D1D]">
        Dashboard
      </h2>

      <div className="mt-10">
        <Tabs className="w-60 mx-auto md:mx-0">
          <Tabs.ListContainer className="backdrop-blur-sm bg-cyan-50/40 rounded-full border border-white/50 shadow-md">
            <Tabs.List
              aria-label="Options"
              className="w-fit *:h-8 *:w-fit *:px-4 *:text-sm *:font-normal *:data-[selected=true]:text-accent-foreground bg-transparent px-2"
            >
              <Tabs.Tab id="daily" >
                My Bookings
                <Tabs.Indicator className="bg-[#00655C]" />
              </Tabs.Tab>
              <Tabs.Tab id="weekly">
                My Profile
                <Tabs.Indicator className="bg-[#00655C]" />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
        </Tabs>
      </div>

      <div className="mt-10">
        <MyBookings></MyBookings>
      </div>
    </div>
  );
};

export default Dashboard;
