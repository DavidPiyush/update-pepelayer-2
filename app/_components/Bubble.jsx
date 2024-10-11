import Button from "./Button";

import "@/app/_styles/style.css";

function Bubble({ todayClaim }) {
  return (
    <section className="bg-[#333] p-8  shadow-lg relative overflow-hidden my-24">
      <div className="flex justify-evenly items-center p-5 relative overflow-hidden">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble4"></div>
        <div className="bubble bubble5"></div>
        <div className="bubble bubble6"></div>
        <div className="bubble bubble7"></div>
        <div className="bubble bubble8"></div>
        <div className="bubble bubble9"></div>
        <div className="challenge-box space-y-4">
          <h2 className=" text-primary-heading-color">Daily Challenge</h2>
          <p id="challenge" className="text-white">
            Complete today&apos;s task
          </p>
          <Button
            id="claimButton button"
            className="bg-primary-btn-color lg:py-4 lg:px-10"
          >
            Claim Now
          </Button>
          <p id="coins" className="text-white">
            Coins Earned:{" "}
            <strong className="text-primary-btn-color">
              {todayClaim || 0} {" "}
              PEPE TODAY!
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bubble;
