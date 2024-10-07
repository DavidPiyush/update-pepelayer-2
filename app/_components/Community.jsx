import "@/app/_styles/style.css";
function Community() {
  return (
    <section className="mt-24">
      <div className="container-div">
        <div className=" border-2 border-black text-center bg-[#e2e2b6] rounded-3xl p-8">
          <h2 className="secondary-heading mb-24 ">Stay in the Loop!</h2>
          <p className="text-lg md:text-xl text-primary-bg-gray">
            Become part of the $PEPE family—follow us for the latest updates,
            exclusive content, and vibrant discussions. Dive in and connect with
            like-minded enthusiasts today!
          </p>
          <div className="community-section">
            <p>Join Our Pepecoin Community today!</p>
            <div className="icon-wrapper">
              <i className="fab fa-reddit main-icon" />
            </div>
            <div className="social-icons">
              <i className="fab fa-github" />
              <i className="fab fa-telegram-plane" />
              <i className="fab fa-discord" />
              <i className="fab fa-x-twitter" />
              <i className="fas fa-coins" />
              <i className="fas fa-chart-line" />
              <i className="fas fa-frog" />
              <i className="fas fa-exchange-alt" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
