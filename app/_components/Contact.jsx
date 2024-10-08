import "@/app/_styles/style.css";
import Button from "./Button";
function Contact() {
  return (
    <section className="mt-24">
      <div className="grid grid-cols-2  ">
        <article className="form-box bg-[#1A1919] flex items-center pl-12 text-white">
          <form action className="form space-y-8 ">
            <input
              type="text"
              placeholder="John"
              className=" input-field"
              required
            />
            <input
              type="text"
              placeholder="Doe"
              className=" input-field"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johan@devgmail.com"
              className=" input-field"
              required
            />
            <input
              type="text"
              placeholder="Share your feedback"
              className=" input-field"
              required
            />
            <input
              type="text"
              placeholder="Write your query here...."
              className=" input-field"
              required
            />
            <div className="checkbox-field">
              <input type="checkbox" name=" " required id />
              <a className="privacy-policy ">
                By submitting this form you agree to our Terms and Privacy
                Policy
              </a>
            </div>
            <div className="checkbox-field mt-12">
              <input type="checkbox" name id required />
              <a className="privacy-policy ">
                Yes, please keep me updated on PEPE news, events and offers.
              </a>
            </div>
            <div className="t-center">
              <Button
                type="submit"
                className="btn send-me rounded-2xl px-[200px]"
              >
                Send
              </Button>
            </div>
          </form>
        </article>
        <article className="form-frog">
          <img src="contact.jpeg" alt='contact jpg' />
        </article>
      </div>
    </section>
  );
}

export default Contact;
