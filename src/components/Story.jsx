import { Link } from "react-router-dom";
import s1 from "../assets/img/s1.jpg";
import s2 from "../assets/img/s2.jpg";
import s3 from "../assets/img/s3.jpg";
import { useState } from "react";

const Story = () => {
  const [play, setPlay] = useState("");

  const data = [
    {
      url: s1,
      title: "Ramesh’s Second Chance",
      content:
        "After a construction accident left him unable to work, Karigar Foundation stepped in with medical aid and family support. Today, Ramesh is rebuilding his life with dignity.",
    },
    {
      url: s2,
      title: "Hope for Sunita’s Children",
      content:
        "When Sunita’s husband, a factory worker, lost his life in an accident, her children’s education was at risk. With our help, they are now back in school, chasing their dreams.",
    },
    {
      url: s3,
      title: "From Pain to Possibility",
      content:
        "Anil, injured at a worksite, faced despair. With rehabilitation and care from Karigar Foundation, he is regaining strength and finding new opportunities. Anil, injured at a worksite, faced despair. With rehabilitation and care from Karigar Foundation, he is regaining strength and finding new opportunities.",
    },
  ];

  const handleSpeak = (text, title) => {
    // Stop if same story is playing
    if (play === title) {
      window.speechSynthesis.cancel();
      return setPlay("");
    }

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel(); // Stop any ongoing speech
      setPlay(title);
      const msg = new SpeechSynthesisUtterance(text);
      msg.onend = () => setPlay(""); // Reset state when finished
      window.speechSynthesis.speak(msg);
    } else {
      console.log("Speech Synthesis not supported in this browser.");
    }
  };

  return (
    <section className="story">
      <h2>
        Voices of the <span>Workers</span>
      </h2>
      <p>
        Through justice, care, and compassion, we help workers rise again after
        life-changing accidents. Here are their stories.
      </p>
      <div className="container">
        {data.map((d) => (
          <div className="story_card">
            <div className="story_iamg">
              <img src={d.url} alt="img" />
              <div
                className="speak"
                onClick={() => handleSpeak(d.content, d.title)}
              >
                {play === d.title ? (
                  <i className="bx bx-pause-circle"></i>
                ) : (
                  <i className="bx bx-play-circle"></i>
                )}
              </div>
            </div>
            <div className="story_body">
              <div className="story_bottom">
                <h4>{d?.title}</h4>
                <p>
                  {d?.content?.length > 180
                    ? d.content?.slice(0, 180) + " ..."
                    : d.content}
                </p>
                <Link>Read Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="view">View More</button>
    </section>
  );
};

export default Story;
