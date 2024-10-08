import Link from "next/link";
import Button from "./Button";

function InfoBox() {
  return (
    <section class='mt-24'>
      <div class="grid grid-cols-2 items-center justify-center bg-[#686767e6] p-5 ">
        <img src="/refers/refer.png" alt="Pepe Coin" class=" p-5 w-[80%]" />
        <div class="space-y-10">
          <h2 class="text-8xl font-semibold text-white">Earn More with Pepe Coin</h2>
          <p class='text-white text-2xl'>
            Join our referral programme and earn Pepe Coins by inviting your
            friends!
          </p>
          <div class="space-x-6">
            <Button id="joinNowButton">Invite Now</Button>
            <Link href="/airdrop/airdrop.html">
              <Button id="joinNowButton">AirDrop</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoBox;
