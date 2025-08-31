import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="about_page">
        <h1>
          About <span>Karigar Foundation</span>
        </h1>
        <p>
          At Karigar Foundation, we believe that the strength of our nation is
          built upon the hard work and dedication of its labor force. Yet,
          countless workers and artisans face unimaginable challenges when
          accidents strike, leaving them and their families vulnerable.
        </p>
        <p>
          We exist to stand by them in those critical moments — offering
          support, dignity, and justice. As a government-affiliated NGO, our
          mission is to empower laborers (majdoors) and their families affected
          by workplace accidents, while also uplifting artisans and preserving
          India’s cultural heritage.
        </p>
        <div className="sub">
          <h2>Our Mission</h2>
          <p>
            To empower workers, artisans, and their families by providing them
            with
            <strong>justice, dignity, and opportunities for growth</strong>,
            ensuring they live with security and pride.
          </p>
        </div>

        <div className="sub">
          <h2>Our Vision</h2>
          <p>
            A society where every worker and artisan is respected, protected,
            and empowered — free from exploitation, with access to opportunities
            that ensure a better future for themselves and their communities.
          </p>
        </div>

        <h2 className="cards_h2">What We Do</h2>
        <ul className="cards">
          <li>
            <div className="circle">💰</div>{" "}
            <strong>Provide Immediate Relief</strong>{" "}
            <p>
              Offering financial aid and medical assistance to workers in
              crisis.
            </p>
          </li>
          <li>
            <div className="circle">🏥</div>{" "}
            <strong>Healthcare & Rehabilitation</strong>{" "}
            <p>
              Ensuring access to quality healthcare and rehabilitation services
              for injured workers.
            </p>
          </li>
          <li>
            <div className="circle">👨‍👩‍👧</div> <strong>Family Support</strong>{" "}
            <p>
              Helping families of accident victims with counseling, education,
              and livelihood opportunities.
            </p>
          </li>
          <li>
            <div className="circle">⚖️</div>{" "}
            <strong>Legal Aid & Rights Awareness</strong>{" "}
            <p>
              Guiding workers to claim their rightful benefits and advocating
              for labor rights.
            </p>
          </li>
          <li>
            <div className="circle">🛠️</div>{" "}
            <strong>Skill Development for Artisans</strong>{" "}
            <p>
              Organizing workshops and mentorship programs to make artisans more
              competitive in the market.
            </p>
          </li>
          <li>
            <div className="circle">🌍</div>{" "}
            <strong>Cultural Preservation</strong>
            <p>
              Supporting traditional crafts to safeguard India’s cultural
              heritage.
            </p>
          </li>
        </ul>
        <h2 className="cards2_h2">Our Core Values</h2>
        <ul className="cards2">
          <li>
            <div className="circle">💪 </div>
            <strong>Empowerment:</strong>{" "}
            <p>
              Strengthening workers and artisans with resources and
              opportunities.
            </p>
          </li>
          <li>
            <div className="circle">⚖️</div>
            <strong>Integrity:</strong>{" "}
            <p>Working with honesty and transparency in every action.</p>
          </li>
          <li>
            <div className="circle">🤝</div>
            <strong>Respect:</strong>
            <p> Honoring every individual’s skill and contribution.</p>
          </li>
          <li>
            <div className="circle">🌐</div>
            <strong>Collaboration:</strong>
            <p>Building partnerships for greater impact.</p>
          </li>
          <li>
            <div className="circle">🌱</div>
            <strong>Sustainability:</strong>{" "}
            <p>
              Promoting long-term practices that benefit people and the
              environment.
            </p>
          </li>
          <li>
            <div className="circle">🌈</div>
            <strong>Inclusivity:</strong>{" "}
            <p>
              Ensuring equal opportunities for all, regardless of background.
            </p>
          </li>
        </ul>
        <h2 className="cards2_h2">Our Impact</h2>
        <p className="break">
          Since our beginning, Karigar Foundation has touched lives by
          providing:
        </p>
        <ul>
          <li>Relief to accident-affected workers and their families.</li>
          <li>Training programs that improved artisans’ skills and income.</li>
          <li>
            Platforms for artisans to showcase their craft and connect with
            buyers.
          </li>
        </ul>
        <h2 className="cards2_h2">Join Us in Our Journey</h2>
        <p className="break">
          Change begins with community. By joining hands with Karigar
          Foundation, you become part of a movement that uplifts laborers,
          empowers artisans, and safeguards our cultural heritage.
        </p>
        <div className="set">
          <button> Join the Community</button>
          <button> Donate Now</button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
