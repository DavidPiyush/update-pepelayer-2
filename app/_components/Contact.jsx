'use client'
import "@/app/_styles/style.css";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react"; // Import useEffect
import Button from "./Button";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
    });
  }, []);

  return (
    <section className="mt-24">
      <div className="grid grid-cols-2">
        <article
          className="form-box bg-[#1A1919] flex items-center pl-12 text-white"
          data-aos="fade-up" // Add fade-up animation to the form box
        >
          <form className="form space-y-8">
            <input
              type="text"
              placeholder="John"
              className="input-field"
              required
              data-aos="fade-up" // Add fade-up animation to input fields
            />
            <input
              type="text"
              placeholder="Doe"
              className="input-field"
              required
              data-aos="fade-up"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johan@devgmail.com"
              className="input-field"
              required
              data-aos="fade-up"
            />
            <input
              type="text"
              placeholder="Share your feedback"
              className="input-field"
              required
              data-aos="fade-up"
            />
            <input
              type="text"
              placeholder="Write your query here...."
              className="input-field"
              required
              data-aos="fade-up"
            />
            <div className="checkbox-field" data-aos="fade-up">
              <input type="checkbox" required />
              <a className="privacy-policy ">
                By submitting this form you agree to our Terms and Privacy
                Policy
              </a>
            </div>
            <div className="checkbox-field mt-12" data-aos="fade-up">
              <input type="checkbox" required />
              <a className="privacy-policy ">
                Yes, please keep me updated on PEPE news, events and offers.
              </a>
            </div>
            <div className="t-center" data-aos="fade-up">
              <Button
                type="submit"
                className="btn send-me rounded-2xl px-[200px]"
              >
                Send
              </Button>
            </div>
          </form>
        </article>
        <article className="form-frog" data-aos="fade-up">
          {" "}
          {/* Add animation to image container */}
          <img src="contact.jpeg" alt="contact jpg" />
        </article>
      </div>
    </section>
  );
}

export default Contact;
