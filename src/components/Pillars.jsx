import React from "react";

const Pillars = () => {
  return (
    <div className="pillar">
      <div className="container">
        <div className="pillar_box">
          <div className="pillar_circle">
            <i className="bx bxs-first-aid"></i>
          </div>
          <h5>Relief & Rehabilitation</h5>
          <p>
            Providing immediate medical aid, financial support, and
            rehabilitation services to workers affected by workplace accidents.
          </p>
        </div>
        <div className="pillar_box">
          <div className="pillar_circle">
            <i className="bx bxs-crown"></i>
          </div>
          <h5>Justice & Advocacy</h5>
          <p>
            Standing up for labor rights, ensuring fair compensation, and
            working with authorities to strengthen worker protection policies.
          </p>
        </div>
        <div className="pillar_box">
          <div className="pillar_circle">
            <i className="bx bxs-book"></i>
          </div>
          <h5>Education & Empowerment</h5>
          <p>
            Supporting children and families of injured workers through
            education, skills training, and livelihood opportunities for a
            better future.
          </p>
        </div>
        <div className="pillar_box">
          <div className="pillar_circle"><i className='bx bxs-donate-heart' ></i></div>
          <h5>Care & Compassion</h5>
          <p>
            Offering emotional support, counseling, and community care to help
            families rebuild their lives with dignity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pillars;
