"use client";
import { useState } from "react";
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

function ReferAndEarn() {
  const [referCode, setReferCode] = useState(null);
  const [referBalance, setReferBalance] = useState(null);
  const [todayClaim, setTodayClaim] = useState(null);
  const [referUserCount, setReferUserCount] = useState(null);
  const [totalBalance, setTotalBalance] = useState(null);
  const [totalEarnDay, setTotalEarnDay] = useState(null);

  const { data: session } = useSession();
  const ethereumId = session?.user.ethereumId;
  console.log(ethereumId, "this from line 39");

  async function userData() {
    try {
      const res = await fetch(`/api/users/${ethereumId}`, {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const {
        totalBalance,
        referredUsers,
        todayClaim,
        totalEarnDay,
        socialLinks,
        referEarn,
        referralCode,
      } = await res.json();

      // setting data in ui
      setReferCode(referralCode);
      setReferBalance(referEarn);
      setReferUserCount(referredUsers.length);
      setTodayClaim(todayClaim);
      setTotalEarnDay(totalEarnDay);
      setTotalBalance(totalBalance);

      console.log(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  userData();

  // allUserData();
  // const createUser = async () => {
  //   const response = await fetch("/api/user/create", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       ethereumId: "0x4610602c2c5e51a043ec74ecdfc1123b8aac9ffr",
  //       totalBalance: 0,
  //       referralCode: "ee794d-b724-4b7b-913f-80b19fa24a9c",
  //       todayClaim: 0,
  //       totalEarnDay: 0,
  //       referEarn: 0,
  //     }),
  //   });

  //   const data = await response.json();
  //   console.log(data);
  // };

  return (
    <section>
      <ReferHeader totalBalance={totalBalance} />
      <div class="relative w-full overflow-hidden bg-blue-500 text-white py-2 shadow-lg flex items-center">
        <div className="sticky top-0 bg-blue-500 text-white font-bold px-2 z-10 whitespace-nowrap">
          Instruction:
        </div>
        <div className="marquee">
          Please follow the instructions carefully to complete the task. These
          points will be converted into PEPE coins.
        </div>
      </div>
      <div className="container-div space-y-10 ">
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
