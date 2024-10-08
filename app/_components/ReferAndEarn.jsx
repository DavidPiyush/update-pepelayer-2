import Bubble from "./Bubble";
import Footer from "./Footer";
import InfoBox from "./InfoBox";
import InfoCard from "./InfoCard";
import ReferHeader from "./ReferHeader";
import ReferInfo from "./ReferInfo";
import ReferWork from "./ReferWork";
import Task from "./Task";

function ReferAndEarn() {
  return (
    <section className="">
      <ReferHeader />
      <div className="container-div space-y-10">
        <Task />
        <InfoCard />
      </div>
      <InfoBox />
      <Bubble />
      <ReferInfo />
      <ReferWork />
      <div className="bg-black">
        <Footer />
      </div>
    </section>
  );
}

export default ReferAndEarn;
