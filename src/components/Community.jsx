import { Link } from "react-router-dom";
import s1 from "../assets/img/s1.jpg";
import s2 from "../assets/img/s2.jpg";
import s3 from "../assets/img/s3.jpg";
import { useState } from "react";

const Community = () => {
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

  return (
    <section className="story">
      <h2 style={{ color: "#002a51", fontWeight: 700 }}>
        Karigar Foundation in the Community
      </h2>
      <p>
        Watch moments from our awareness drives, support programs, and community
        events that bring hope to workers and their families.
      </p>
      <div className="container">
        {data.map((d) => (
          <div className="story_card">
            <div className="story_iamg">
              <img src={d.url} alt="img" />
            </div>
            <div className="story_body">
              <div className="story_bottom">
                <h4>{d?.title}</h4>
                <p>
                  {d?.content?.length > 180
                    ? d.content?.slice(0, 180) + " ..."
                    : d.content}
                </p>
                <Link>View Video</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="view">View More</button>
    </section>
  );
};

export default Community;
