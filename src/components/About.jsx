import img from "../assets/img/about.svg"



const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="left">
          <div className="top-text">
            <div className="line"></div>
            <h2>Know About Us</h2>
          </div>
          <p>
            At Karigar Foundation, we believe that the strength of our nation is
            built upon the hard work and dedication of its labor force. Yet,
            countless workers face unimaginable challenges when accidents
            strike, leaving them and their families vulnerable. We exist to
            stand by them in those critical moments.
          </p>
          <p>
            As a government-affiliated NGO, our mission is to empower laborers
            (majdoors) and their families affected by workplace accidents by
            providing them with the justice, dignity, and support they
            rightfully deserve.
          </p>
          <p>We work tirelessly to:</p>
          <ul>
            <li>
              Offer immediate relief through financial and medical assistance.
            </li>
            <li>
              Provide access to quality healthcare and rehabilitation for
              injured workers.
            </li>
            <li>
              Support families of accident victims with counseling, education,
              and livelihood opportunities.
            </li>
            <li>
              Advocate for labor rights and safer working conditions across
              industries.
            </li>
          </ul>
          <button>Learn More</button>
        </div>
        <div className="right">
             <div className="top-text">
            <div className="line"></div>
            <h2>Know About Us</h2>
          </div>
            <img src={img} alt="image"/>
          <div className="pulse">
            <div className="pulse-animation">
              <i className="bx bx-play-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
