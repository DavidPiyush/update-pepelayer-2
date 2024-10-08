import '@/app/_styles/style.css'
function ReferInfo() {
  return (
    <section id="referralInfo" class="section-el ">
      <div class="infoBox ">
        <h3>Your Referral Link</h3>
        <input
          type="text"
          id="referralLink"
          class="input"
          readonly=""
          value="https://pepelayer2.com/refer/0"
        />
        <button id="copyLinkButton button">Copy Link</button>
      </div>
      <div class="infoBox">
        <h3>Your Referrals</h3>
        <p>
          <span id="referralCount">0</span> Friends Referred
        </p>
      </div>
      <div class="infoBox">
        <h3>Earnings From Referrals</h3>
        <p>
          <span id="referralEarnings">0</span> Points Earned
        </p>
      </div>
    </section>
  );
}

export default ReferInfo;
