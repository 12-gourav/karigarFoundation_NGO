import LabourChart from "../chart/LabourChart";

const Visuals = () => {
  return (
    <section className="visual">
      <div className="left">
        <h2>Your Contribution, Their Transformation</h2>
        <p>
          At Karigar Foundation, we believe in complete transparency. Every
          rupee you donate makes a direct difference in the lives of workers and
          their families. We ensure that your generosity is used wisely and
          effectively to bring meaningful change.
        </p>
        <ul>
          <li>
            <h4><span>37%</span> – Healthy Food 🥗</h4>
            <p>
              Providing nutritious meals to injured workers and their families
              during recovery.
            </p>
          </li>
          <li>
            <h4><span>20%</span> – Medicine 💊</h4>
            <p>
              Ensuring access to life-saving medicines and ongoing medical
              treatments.
            </p>
          </li>
          <li>
            <h4><span>17%</span> – Pure Water 💧</h4>
            <p>
              Delivering clean drinking water to families in rural and urban
              areas.
            </p>
          </li>
          <li>
            <h4><span>13%</span> – Excursions & Welfare Activities 🚍</h4>
            <p>
              Organizing support programs and community engagement for worker
              families.
            </p>
          </li>
          <li>
            <h4><span>12%</span> – Feeding the Poor 🍛</h4>
            <p>
              Supporting marginalized communities with regular food distribution
              drives.
            </p>
          </li>
        </ul>
        <h3>Our Promise</h3>
        <p style={{color:"#000"}}>
          Every contribution is carefully allocated to maximize impact. With
          your support, we can continue to restore dignity, provide justice, and
          care for those who build our nation with their hands.
        </p>
      </div>
      <div className="right">
        <LabourChart/>
      </div>
    </section>
  );
};

export default Visuals;
