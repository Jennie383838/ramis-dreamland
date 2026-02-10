export default function About() {
  return (
    <div className="container about">
      <h1>About Rami’s Dreamland ✨</h1>

      <p className="about-intro">
        Rami’s Dreamland is a trusted K-pop marketplace built by fans, for fans.
        We provide a safe and friendly space to buy, sell, and trade authentic
        K-pop merchandise while connecting collectors and stans from all around.
      </p>

      <section className="about-section">
        <h3>What We Offer</h3>
        <ul>
          <li>100% authentic K-pop albums & photocards</li>
          <li>Buy / Sell / Trade services</li>
          <li>Concert updates & exclusive fan photos</li>
        </ul>
      </section>

      <section className="about-section">
        <h3>Our Team</h3>
        <ul className="team-list">
          <li><strong>Owner:</strong> @Ruka_Forever</li>
          <li><strong>Co-Owner:</strong> @gabbysyj</li>
          <li><strong>Rules Manager:</strong> @xavierkoh1</li>
          <li><strong>Sales Support:</strong> @Rin_yujinsbangs</li>
        </ul>
      </section>

      <section className="about-section">
        <h3>Meetups</h3>
        <p>
          Offline meetups are available in the <strong>North</strong> and{" "}
          <strong>West</strong> areas for secure and friendly exchanges.
        </p>
      </section>

      <a
        href="https://t.me/Ruka1111"
        target="_blank"
        rel="noopener noreferrer"
        className="btn primary"
      >
        Join Our Telegram Channel 💬
      </a>
    </div>
  );
}
