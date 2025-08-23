import img from "../assets/img/banner.svg";
import Typewriter from "typewriter-effect";

const Banner = () => {
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
        <button>Join Community</button>
      </div>
      <div className="right">
        <img src={img} alt="banner image" />
      </div>
    </section>
  );
};

export default Banner;
