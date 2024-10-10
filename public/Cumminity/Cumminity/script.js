// Feedback Form Submission Handler
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;
    const query = document.getElementById("query").value;
    const termsAgreed = document.getElementById("terms").checked;
    const updatesChecked = document.getElementById("updates").checked;

    // Validate terms agreement
    if (termsAgreed) {
      console.log({
        firstName,
        lastName,
        email,
        feedback,
        query,
        updatesChecked,
      });
      alert("Your feedback has been submitted! 🚀 To the moon!");
      document.getElementById("feedbackForm").reset(); // Reset the form after submission
    } else {
      alert("Please agree to the Terms and Privacy Policy.");
    }
  });

// Wallet Carousel
const walletCarousel = document.querySelector(".wallet-carousel");
let scrollAmount = 0; // Variable to track the amount scrolled
const scrollSpeed = 1; // Adjust the speed of scrolling

// Function to slide the wallet icons
function slideWallets() {
  scrollAmount += scrollSpeed; // Increment the scroll amount
  walletCarousel.style.transform = `translateX(-${scrollAmount}px)`; // Move left

  // Reset scroll amount if reached the end
  if (scrollAmount >= walletCarousel.scrollWidth / 3) {
    scrollAmount = 0; // Reset if reached the end
    walletCarousel.style.transition = "none"; // Disable transition for a smoother reset
    walletCarousel.style.transform = `translateX(0px)`; // Snap back to the start
    requestAnimationFrame(() => {
      walletCarousel.style.transition = "transform 0.5s linear"; // Re-enable transition for smooth scrolling
    });
  }
}

// Call the slideWallets function every 2 seconds
setInterval(slideWallets, 2000);

// Scrolling Logos
const logosInner = document.querySelector(".scrolling-logos-inner");

// Pause scrolling on hover
logosInner.addEventListener("mouseover", () => {
  logosInner.style.animationPlayState = "paused"; // Pause on hover
});

logosInner.addEventListener("mouseout", () => {
  logosInner.style.animationPlayState = "running"; // Resume on mouse out
});
