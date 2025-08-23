import img from "../assets/img/banner2.png";

const LastBanner = () => {
  return (
    <section className="last_banner">
      <div className="container">
        <img src={img} alt="img" />
        <div className="dark">
          <h2>Together, We Build Hope</h2>
          <p>
            Your support gives workers and their families a future filled with
            dignity.
          </p>
          <p>Join us in uplifting India’s labourers — one life, one family, one community at a time.</p>
          <div className="set">
            <button>Donate Now</button>
            <button>Become a Volunteer</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastBanner;
