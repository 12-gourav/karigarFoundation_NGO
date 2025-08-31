import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import CommunityForm from "../components/modals/CommunityForm";

const Community = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar />
      <section className="community_page">
        <h1>
          Welcome to <span>Karigar Foundation</span>
        </h1>
        <p className="sp">
          A place where artisans, workers, and communities come together to
          grow, connect, and thrive
        </p>
        <p>
          At Karigar Foundation, we believe in the power of unity. Our community
          is built to support artisans and workers by providing resources,
          opportunities, and a strong network. Whether you are a skilled
          craftsman, a learner, or someone passionate about preserving cultural
          heritage — this is your family.
        </p>

        <h2>Why Join Our Community?</h2>
        <ul>
          <li>
            🤝 <strong>Support & Belonging</strong> – Connect with artisans and
            workers who share your journey.
          </li>
          <li>
            🎓 <strong>Skill Growth</strong> – Learn through workshops,
            mentorship, and training programs.
          </li>
          <li>
            💰 <strong>Financial Assistance</strong> – Access microloans,
            grants, and financial literacy sessions.
          </li>
          <li>
            🌍 <strong>Market Reach</strong> – Showcase and sell your crafts
            directly through our online marketplace.
          </li>
          <li>
            🎉 <strong>Cultural Exposure</strong> – Participate in exhibitions,
            fairs, and cultural events.
          </li>
          <li>
            💡 <strong>Collaboration</strong> – Share ideas, solve challenges,
            and grow together as a strong network.
          </li>
        </ul>
        <h2>How to Join</h2>
        <ul>
          <li>
            📝 <strong>Step 1:</strong> Fill out the Community form with your
            basic details.
          </li>

          <li>
            🚀 <strong>Step 2:</strong> Submit your form.
          </li>
        </ul>
        <h2>What Our Members Say</h2>
        <ul>
          <li>
            “Joining Karigar Foundation gave me financial stability and new
            clients.” – <em>Ramesh, Artisan</em>
          </li>
          <li>
            “The workshops helped me improve my craft and reach new markets.” –{" "}
            <em>Anita, Weaver</em>
          </li>
          <li>
            “I found a supportive family that truly values my skills.” –{" "}
            <em>Iqbal, Potter</em>
          </li>
        </ul>
        <button onClick={() => setOpen(true)}>Join Community</button>
      </section>
      <Footer />
      {open && <CommunityForm open={open} setOpen={setOpen} />}
    </>
  );
};

export default Community;
