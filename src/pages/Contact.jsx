import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="contact">
        <h1>
          Contact <span>Karigar Foundation</span>
        </h1>
        <p>
          We’re here to support, collaborate, and grow together. Reach out
          today!
        </p>
        <div className="wrap">
          <div className="left">
            <h2>Our Contact Details</h2>
            <div className="form_wrap">
              <div className="form_group">
                <div className="circle">
                  <i className="bx bxs-envelope"></i>
                </div>
                <div className="form_body">
                  <label>Email</label>
                  <p>karigarfoundation@gmail.com</p>
                </div>
              </div>
              <div className="form_group">
                <div className="circle">
                  <i className="bx bxs-phone"></i>
                </div>
                <div className="form_body">
                  <label>Phone</label>
                  <p>+91 12345 54 654</p>
                </div>
              </div>
              <div className="form_group">
                <div className="circle">
                  <i className="bx bxs-map"></i>
                </div>
                <div className="form_body">
                  <label>Address</label>
                  <p> 123, NGO Lane, Lucknow, Uttar Pradesh – 226006</p>
                </div>
              </div>
            </div>
            <h2>Join Our WhatsApp Community</h2>
            <p>
              Get updates, stories, and event information directly on your
              phone.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi%20Karigar%20Foundation%20Team!"
              target="_blank"
              class="btn btn-success"
            >
             💬 Join WhatsApp Group
            </a>
          </div>
          <div className="right">
            <div className="form_wrap">
              <h2>Send Us a Message</h2>
              <div className="form_group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="form_group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form_group">
                <label>Phone</label>
                <input type="text" placeholder="Enter your phone" />
              </div>
              <div className="form_group">
                <label>Message</label>
                <input type="text" placeholder="Enter your message" />
              </div>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
