function ReferWork() {
    return (
      <section id="howItWorks " class="section-el howItWorks">
        <h2 class="text-[2em] mb-4 pb-2 border-b-4 border-[#f39c12] text-black text-center">
          How It Works
        </h2>
        <div class="steps-container">
          <div class="step flex flex-col items-center">
            <video
              src="/refers/pepe-refer-animation.mp4"
              autoPlay=""
              class="step-image"
              loop=""
            ></video>
            <h3 class="text-primary-text-grey-1 font-semibold text-lg ">
              Invite Friends
            </h3>
            <p>Invite your friends using your unique referral link.</p>
          </div>
          <div class="step flex flex-col items-center">
            <video
              src="/refers/earnPepe.mp4"
              autoPlay=""
              class="step-image"
              loop=""
            ></video>

            <h3 class="text-primary-text-grey-1 font-semibold text-lg">
              Earn Coins
            </h3>
            <p>Your friends sign up and you will get rewards</p>
          </div>
          <div class="step flex flex-col items-center">
            <video
              src="/refers/pepe-get-rewards.mp4"
              autoPlay=""
              class="step-image"
              loop=""
            ></video>

            <h3 class="text-primary-text-grey-1 font-semibold text-lg">
              Get Rewards
            </h3>
            <p>
              {" "}
              Invite more and more friends and family members and get unlimited
              rewad
            </p>
          </div>
        </div>
      </section>
    );
}

export default ReferWork
