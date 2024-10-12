"use client";
import { useState, useEffect } from "react";
import Bubble from "./Bubble";
import Footer from "./Footer";
import InfoBox from "./InfoBox";
import InfoCard from "./InfoCard";
import ReferHeader from "./ReferHeader";
import ReferInfo from "./ReferInfo";
import ReferWork from "./ReferWork";
import Task from "./Task";
import "@/app/_styles/style.css";
import { useSession } from "next-auth/react";
import Spinner from "./Spinner";
import { userData } from "../_data/FetchAPI";

function ReferAndEarn() {
  const [referCode, setReferCode] = useState(null);
  const [referBalance, setReferBalance] = useState(null);
  const [todayClaim, setTodayClaim] = useState(null);
  const [referUserCount, setReferUserCount] = useState(null);
  const [totalBalance, setTotalBalance] = useState(null);
  const [totalEarnDay, setTotalEarnDay] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading

  const { data: session, status } = useSession();
  const ethereumId = session?.user?.ethereumId?.toLowerCase(); // Make sure ethereumId is lowercase

  console.log(ethereumId, "this from comming from session");
  useEffect(() => {
    if (status === "authenticated" && ethereumId) {
      fetchUserData(ethereumId);
    } else {
      // Clear state if the session is invalid or user is logged out
      resetState();
      setLoading(false); // Stop the loader when session is invalid
    }
  }, [status, ethereumId]);

  const fetchUserData = async (ethereumId) => {
    try {
      setLoading(true); // Start loading when fetching data

      const user = await userData(ethereumId, setLoading); // Fetch user data from API
      if (user) {
        // If user data exists, update state
        setReferCode(user.referralCode);
        setReferBalance(user.referEarn);
        setReferUserCount(user.referredUsers.length);
        setTodayClaim(user.todayClaim);
        setTotalEarnDay(user.totalEarnDay);
        setTotalBalance(user.totalBalance);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false); // Stop loading after data is fetched or error occurs
    }
  };

  // Function to reset state when no session is found or user logs out
  const resetState = () => {
    setReferCode(null);
    setReferBalance(null);
    setReferUserCount(null);
    setTodayClaim(null);
    setTotalBalance(null);
    setTotalEarnDay(null);
  };

  // Render loading spinner if data is still loading
  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center bg-[#333] gap-5">
        <Spinner /> {/* Render spinner */}
        <p className="text-base text-white">Loading data...</p>
      </div>
    );
  }

  return (
    <section>
      <ReferHeader totalBalance={totalBalance} />
      <div className="relative w-full overflow-hidden bg-blue-500 text-white py-2 shadow-lg flex items-center">
        <div className="sticky top-0 bg-blue-500 text-white font-bold px-2 z-10 whitespace-nowrap">
          Instruction:
        </div>
        <div className="marquee">
          Please follow the instructions carefully to complete the task. These
          points will be converted into PEPE coins.
        </div>
      </div>
      <div className="container-div space-y-10">
        <Task totalEarnDay={totalEarnDay} />
        <InfoCard />
      </div>
      <InfoBox />
      <Bubble todayClaim={todayClaim} />
      <ReferInfo
        referCode={referCode}
        referUserCount={referUserCount}
        referBalance={referBalance}
      />
      <ReferWork />
      <div className="bg-black">
        <Footer />
      </div>
    </section>
  );
}

export default ReferAndEarn;
