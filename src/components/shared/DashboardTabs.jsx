"use client";
import { Tabs } from "@heroui/react";
import React, { useState } from "react";
import MyBookings from "./MyBookings";
import MyProfile from "./MyProfile";

const DashboardTabs = ({ bookedData }) => {
  const [tab, setTab] = useState("bookings");

  return (
    <div>
      <div>
        <Tabs className="w-60 mx-auto md:mx-0">
          <Tabs.ListContainer className="backdrop-blur-sm bg-cyan-50/40 rounded-full border border-white/50 shadow-md">
            <Tabs.List
              aria-label="Options"
              className="w-fit *:h-8 *:w-fit *:px-4 *:text-sm *:font-normal *:data-[selected=true]:text-accent-foreground bg-transparent px-2"
            >
              <Tabs.Tab id="bookings" onClick={() => setTab("bookings")}>
                My Bookings
                <Tabs.Indicator className="bg-[#00655C]" />
              </Tabs.Tab>
              <Tabs.Tab id="profile" onClick={() => setTab("profile")}>
                My Profile
                <Tabs.Indicator className="bg-[#00655C]" />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
        </Tabs>
      </div>

      {tab === "bookings" ? (
        <div className="mt-10">
          <MyBookings bookedData={bookedData}></MyBookings>
        </div>
      ) : (
        <div className="mt-10">
            <MyProfile></MyProfile>
        </div>
      )}
    </div>
  );
};

export default DashboardTabs;
