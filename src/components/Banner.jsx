import { useState } from "react";
import img from "../assets/img/banner.svg";
import Typewriter from "typewriter-effect";
import CommunityForm from "./modals/CommunityForm";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [open, setOpen] = useState(false);
  const Navigate = useNavigate();
  return (
    <section className="banner">
      <div className="left">
        <h1>
          Standing Strong with <span>Every Worker</span> – Because{" "}
          <span>Justice and Care</span> Are Their Rights, Not Privileges
        </h1>
        <h4>
          <Typewriter
            options={{
              strings: [
                " Protecting laborers through relief, rights, and rehabilitation.",
                "Workers Build Our Nation; We Stand by Them with Justice, Support, and Care in Their Toughest Times.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h4>
        <p>
          From the first call for help to long-term recovery, Karigar Foundation
          helps workers navigate hospital bills, legal claims, and livelihood
          shocks after accidents. We make sure their rights are respected and
          their families supported.
        </p>
        <div className="set">
          <button onClick={() => setOpen(true)}>Join Community</button>
          <button onClick={() => Navigate("/community")}>Learn More</button>
        </div>
      </div>
      <div className="right">
        <img src={img} alt="banner image" />
      </div>

      {open && <CommunityForm open={open} setOpen={setOpen} />}
    </section>
  );
};

export default Banner;
