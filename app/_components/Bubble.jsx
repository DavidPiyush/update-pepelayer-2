import Button from "./Button";

import "@/app/_styles/style.css"

function Bubble() {
    return (
      <section class="bg-[#333] p-8  shadow-lg relative overflow-hidden my-24">
        <div class="flex justify-evenly items-center p-5 relative overflow-hidden">
          <div class="bubble bubble1"></div>
          <div class="bubble bubble2"></div>
          <div class="bubble bubble3"></div>
          <div class="bubble bubble4"></div>
          <div class="bubble bubble5"></div>
          <div class="bubble bubble6"></div>
          <div class="bubble bubble7"></div>
          <div class="bubble bubble8"></div>
          <div class="bubble bubble9"></div>
          <div class="challenge-box">
            <Button id="claimButton button" class=" ">
              Activate account
            </Button>
          </div>
        </div>
      </section>
    );
}

export default Bubble
