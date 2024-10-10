"use client";
import "@/app/_styles/style.css";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect, useState } from "react"; // Import useEffect
import Button from "./Button";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    feedback: "",
    query: "",
    termsAgreed: false,
    updatesChecked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.termsAgreed) {
      console.log(formData);
      alert("Your feedback has been submitted! 🚀 To the moon!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        feedback: "",
        query: "",
        termsAgreed: false,
        updatesChecked: false,
      });
    } else {
      alert("Please agree to the Terms and Privacy Policy.");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
    });

    // Cleanup function to destroy AOS instance
    return () => {
      AOS.refresh(); // You can also use AOS.refresh() if you want to reset the animations
    };
  }, []); // Empty dependency array ensures this runs only once when component mounts

  return (
    <section className="feedback-section">
      <div className="container flex-col lg:flex-row ">
        <div className="form-container  w-[100%] lg:w-[60%]">
          <h2 className="text-base text-[2.5em]" data-aos="fade-up">
            Get in Touch with Pepe Coin!
          </h2>
          <form id="feedbackForm" onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Your First Name"
                required
                data-aos="fade-up"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Your Last Name"
                required
                data-aos="fade-up"
                value={formData.lastName}
                onChange={handleChange}
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email Address"
                required
                data-aos="fade-up"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                id="feedback"
                name="feedback"
                placeholder="Share your thoughts or feedback..."
                required
                data-aos="fade-up"
                value={formData.feedback}
                onChange={handleChange}
              ></textarea>
              <textarea
                id="query"
                name="query"
                placeholder="Any questions? Let us know!"
                required
                data-aos="fade-up"
                value={formData.query}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="checkboxes-form">
              <label className="form-label">
                <input
                  type="checkbox"
                  id="terms"
                  name="termsAgreed" // Ensure 'name' matches with the state
                  required
                  data-aos="fade-left"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                />
                I agree to the
                <a href="#" className="form-privacy" data-aos="fade-up">
                  Terms and Privacy Policy
                </a>
              </label>
              <label className="form-label" data-aos="fade-up">
                <input
                  type="checkbox"
                  id="updates"
                  name="updatesChecked" // Ensure 'name' matches with the state
                  checked={formData.updatesChecked}
                  onChange={handleChange}
                />
                Keep me updated with Pepe news, events, and offers.
              </label>
            </div>

            <Button
              type="submit"
              className="btn bg-[#e1a313] text-[12px]"
              data-aos="fade-up"
            >
              🚀 Submit to the Moon 🚀
            </Button>
          </form>
        </div>
        <div
          className="image-container w-[100%] lg:w-[35%] p-6 lg:p-0"
          data-aos="fade-up"
        >
          <img
            src="/form-image.png"
            alt="Pepe with Coins"
            className="frog-image lg:max-w-[180%]"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;

// <section className="mt-24">
//   <h2
//     className="text-6xl font-bold text-[#e1a313] leading-tight uppercase text-center py-12"
//     data-aos="fade-left"
//   >
//     CONTACT US
//   </h2>
//   <div className="grid grid-cols-2">
//     <article
//       className="form-box bg-[#1A1919] flex items-center pl-12 text-white"
//       data-aos="fade-up" // Add fade-up animation to the form box
//     >
//       <form className="form space-y-8">
//         <input
//           type="text"
//           placeholder="John"
//           className="input-field"
//           required
//           data-aos="fade-up" // Add fade-up animation to input fields
//         />
//         <input
//           type="text"
//           placeholder="Doe"
//           className="input-field"
//           required
//           data-aos="fade-up"
//         />
//         <input
//           type="email"
//           name="email"
//           id="email"
//           placeholder="johan@devgmail.com"
//           className="input-field"
//           required
//           data-aos="fade-up"
//         />
//         <input
//           type="text"
//           placeholder="Share your feedback"
//           className="input-field"
//           required
//           data-aos="fade-up"
//         />
//         <input
//           type="text"
//           placeholder="Write your query here...."
//           className="input-field"
//           required
//           data-aos="fade-up"
//         />
//         <div className="checkbox-field" data-aos="fade-up">
//           <input type="checkbox" required />
//           <a className="privacy-policy ">
//             By submitting this form you agree to our Terms and Privacy
//             Policy
//           </a>
//         </div>
//         <div className="checkbox-field mt-12" data-aos="fade-up">
//           <input type="checkbox" required />
//           <a className="privacy-policy ">
//             Yes, please keep me updated on PEPE news, events and offers.
//           </a>
//         </div>
//         <div className="t-center" data-aos="fade-up">
//           <Button
//             type="submit"
//             className="btn send-me rounded-2xl px-[200px]"
//           >
//             Send
//           </Button>
//         </div>
//       </form>
//     </article>
//     <article className="form-frog" data-aos="fade-up">
//       {" "}
//       {/* Add animation to image container */}
//       <img src="form-image.png" alt="contact jpg" />
//     </article>
//   </div>
// </section>
