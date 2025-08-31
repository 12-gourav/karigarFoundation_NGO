import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../assets/img/qr.jpeg"

const Donation = () => {
  return (
    <>
      <Navbar />
      <section className="donation">
        <h1>Support Karigar Foundation</h1>
        <p>
          Your contribution helps us empower workers, artisans, and their
          families. Every donation goes directly towards providing relief,
          healthcare, education, and livelihood opportunities to those who need
          it the most.
        </p>
        <div className="donation-why">
          <h2>Why Your Donation Matters</h2>
          <ul>
            <li>
              💰 Provide financial relief to accident-affected workers and their
              families.
            </li>
            <li>
              🏥 Ensure access to healthcare and rehabilitation for injured
              workers.
            </li>
            <li>
              📚 Support children’s education and skill development programs.
            </li>
            <li>
              🎨 Preserve traditional crafts and empower artisans with new
              opportunities.
            </li>
          </ul>
        </div>
        <div className="donation-methods">
          <h2>Ways You Can Donate</h2>

          <div className="bank-details">
            <h3>Bank Transfer</h3>
            <ul>
              <li>
                <strong>Account Name:</strong> Karigar Foundation
              </li>
              <li>
                <strong>Account Number:</strong> 1234567890
              </li>
              <li>
                <strong>IFSC Code:</strong> ABCD0123456
              </li>
              <li>
                <strong>Bank Name:</strong> XYZ Bank, Branch
              </li>
            </ul>
          </div>

          <div className="qr-code">
            <h3>Scan & Pay</h3>
            <p>
              You can also donate instantly using UPI by scanning the QR code
              below:
            </p>
            <img src={img} alt="Karigar Foundation Donation QR" />
            <p>
              <strong>UPI ID:</strong> boim-702164000365@boi
            </p>
          </div>
        </div>

      </section>
      <Footer />
    </>
  );
};

export default Donation;
