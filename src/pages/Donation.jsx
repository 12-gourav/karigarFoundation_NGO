import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../assets/img/qr.jpeg";

const Donation = () => {
  return (
    <>
      <Navbar />
      <section className="donation">
        <h1>
          Support <span>Karigar Foundation</span>
        </h1>
        <p>
          Your contribution helps us empower workers, artisans, and their
          families. Every donation goes directly towards providing relief,
          healthcare, education, and livelihood opportunities to those who need
          it the most.
        </p>
        <div className="donation-why">
          <h2>
            Why Your <span>Donation Matters</span>
          </h2>
          <ul>
            <li>
              <div className="circle">💰</div>
              <p>
                Many workers and artisans face unexpected hardships due to
                workplace accidents or sudden income loss. Your donation helps
                provide immediate financial relief to affected families,
                covering essentials like food, rent, and emergency needs. This
                support ensures they can survive with dignity during the most
                difficult times.
              </p>
            </li>
            <li>
              <div className="circle">🏥</div>
              <p>
                Healthcare costs can be overwhelming for injured workers. With
                your support, we make quality medical care, rehabilitation, and
                post-accident support accessible to those who need it most.
                Donations contribute to covering hospital bills, medicines,
                therapy, and long-term care — giving injured workers a real
                chance at recovery and independence.
              </p>
            </li>
            <li>
              <div className="circle">📚</div>
              <p>
                Children of laborers and artisans often drop out of school due
                to financial struggles. Your donation empowers us to provide
                scholarships, books, uniforms, and school supplies so these
                children can continue their education. We also run skill
                development workshops for youth and adults, enabling them to
                learn new trades and secure sustainable livelihoods.
              </p>
            </li>
            <li>
              <div className="circle">🎨</div>
              <p>
                India’s rich cultural heritage depends on artisans who practice
                centuries-old crafts. Sadly, many are abandoning their art due
                to lack of financial stability. Your support helps us promote,
                train, and provide market access for artisans so they can
                sustain their livelihoods. By empowering them with new
                opportunities, you’re not only supporting families but also
                preserving cultural heritage for future generations.
              </p>
            </li>
          </ul>
        </div>
        <div className="donation-methods">
          <h2>
            Ways You <span>Can Donate</span>
          </h2>

          <div className="bank-details">
            <h3>Bank Transfer</h3>
            <ul>
              <li>
                <strong>Account Name:</strong> Karigar Foundation
              </li>
              <li>
                <strong>Account Number:</strong> 702120110000365
              </li>
              <li>
                <strong>IFSC Code:</strong> BKID0007021
              </li>
              <li>
                <strong>Bank Name:</strong> Bank of India Bank, Lalganj
              </li>
            </ul>
            <div className="line"></div>
            <h3>Scan & Pay</h3>
            <ul>
              <li>
                <strong>UPI ID:</strong> boim-702164000365@boi
              </li>
              <li>
                You can also donate instantly using UPI by scanning the QR code
                below:
              </li>
            </ul>
            <img src={img} alt="Karigar Foundation Donation QR" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Donation;
